import { createRef } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import dmwTitleLogoWhite from '../../img/dmw-title-logo-white.svg';
import ContactForm from '../ContactForm/ContactForm';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <Container fluid className={classes.welcomeContainer}>
      <Center>
        <img
          className={classes.dmwTitleLogoWhite}
          src={dmwTitleLogoWhite}
          alt="Dark Matter Woodworking Logo"
        />
      </Center>
      <Space h="md" />
      <ContactForm />
    </Container>
  );
}
