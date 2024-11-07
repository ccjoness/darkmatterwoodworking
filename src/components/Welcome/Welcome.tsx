import { createRef } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Anchor,
  Button,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Space,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import ContactForm from '../ContactForm/ContactForm';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <Container fluid>
      <Title className={classes.title} ta="center" mt={100}>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: '#673517', to: '#ffffff' }}
        >
          Dark Matter Woodworking
        </Text>
      </Title>
      <Space h="md" />
      <ContactForm />
    </Container>
  );
}
