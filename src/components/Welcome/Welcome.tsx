import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to <br />
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Dark Matter Woodworking
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This is the future home of Dark Matter Woodworking. If you have any questions, please
        contact us at{' '}
        <Anchor href="mailto:chris.charles.jones@gmail.com">chris.charles.jones@gmail.com</Anchor>
      </Text>
    </>
  );
}
