import { createRef, useEffect, useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Box,
  Button,
  Container,
  Group,
  Loader,
  LoadingOverlay,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import classes from './ContactForm.module.css';

const ContactForm = () => {
  const recaptchaRef = createRef<ReCAPTCHA>();
  const [loadingVisible, loadingHandler] = useDisclosure(false);
  const [successVisible, successHandler] = useDisclosure(false);
  const [errorVisible, errorHandler] = useDisclosure(false);
  const [errorMessage, setErrorMessage] = useState(
    'There was an error sending your message. Please try again later.'
  );

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) => (value.length < 2 ? 'This message must have at least 2 letters' : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    loadingHandler.open();
    const token = await recaptchaRef.current?.executeAsync();
    if (!token) {
      console.log('Recaptcha verification failed');
      setErrorMessage('Recaptcha verification failed. Please try again.');
      loadingHandler.close();
      errorHandler.open();
      return;
    }
    const data = {
      service_id: 'dmw_webform',
      template_id: 'dmw_contact_form',
      user_id: 'yKvjwFmqll-c565T-',
      template_params: {
        name: values.name,
        email: values.email,
        message: values.message,
        'g-recaptcha-response': token,
      },
    };
    axios
      .post('https://api.emailjs.com/api/v1.0/email/send', data)
      .then((response) => {
        if (response.status === 200) {
          console.log('SUCCESS!', response.status, response);
          loadingHandler.close();
          successHandler.open();
        } else {
          console.log('FAILED...', response.status, response);
          setErrorMessage('There was an error sending your message. Please try again later.');
          loadingHandler.close();
          errorHandler.open();
        }
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setErrorMessage('There was an error sending your message. Please try again later.');
        loadingHandler.close();
        errorHandler.open();
      });
  };

  return (
    <Container>
      <Box pos="relative">
        <LoadingOverlay visible={loadingVisible} loaderProps={{ children: <Loader /> }} />
        <LoadingOverlay
          visible={successVisible}
          loaderProps={{
            children: (
              <>
                <Text>Thank you, your message has been sent!</Text>
                <Button
                  onClick={() => {
                    successHandler.close();
                    form.reset();
                  }}
                >
                  Close
                </Button>
              </>
            ),
          }}
        />
        <LoadingOverlay
          visible={errorVisible}
          loaderProps={{
            children: (
              <>
                <Text>{errorMessage}</Text>
                <Button
                  onClick={() => {
                    errorHandler.close();
                    form.reset();
                  }}
                >
                  Close
                </Button>
              </>
            ),
          }}
        />
        <Paper shadow="md" radius="lg">
          <div className={classes.wrapper}>
            <Text c="dimmed" ta="center" size="lg" mx="auto" mt="xl">
              I am still working on building out this site. If you would like to inquire about
              custom woodworking or if you have any questions, please don't hesitate to contact me.
            </Text>

            <form id="dmw_contact_form" onSubmit={form.onSubmit(handleSubmit)}>
              <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                <TextInput
                  withAsterisk
                  label="Name"
                  key={form.key('name')}
                  {...form.getInputProps('name')}
                />
                <TextInput
                  withAsterisk
                  label="Email"
                  key={form.key('email')}
                  {...form.getInputProps('email')}
                />
              </SimpleGrid>
              <Textarea
                withAsterisk
                label="Message"
                key={form.key('message')}
                {...form.getInputProps('message')}
              />
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey="6LcHY3gqAAAAAEr1_iIhP9plQwiA6AmdxAPV14WN"
              />
              <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </div>
        </Paper>
      </Box>
    </Container>
  );
};

export default ContactForm;
