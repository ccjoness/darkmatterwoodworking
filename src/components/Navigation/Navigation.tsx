import { useState } from 'react';
import {
  IconAdjustments,
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconMoon,
  IconNotification,
  IconSun,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Container,
  Divider,
  Drawer,
  Group,
  HoverCard,
  rem,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useComputedColorScheme,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import DmwLogo from '../../img/dmw_logo_init_white_30px.png';
import classes from './Navigation.module.css';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function Navigation() {
  const [active, setActive] = useState(links[0].link);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark');

  const toggleColorScheme = () => {
    console.log('toggleColorScheme', computedColorScheme);
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <div></div>
        {/* <img
            src={DmwLogo}
          className={
            computedColorScheme === 'dark' ? classes.dmwTitleLogoWhite : classes.dmwTitleLogoDark
          }
        /> */}
        <Group gap={1}>
          {computedColorScheme === 'dark' ? (
            <ActionIcon size={42} variant="default" onClick={toggleColorScheme}>
              <IconSun />
            </ActionIcon>
          ) : (
            <ActionIcon size={42} variant="default" onClick={toggleColorScheme}>
              <IconMoon />
            </ActionIcon>
          )}
        </Group>
      </Container>
    </header>
  );
}
