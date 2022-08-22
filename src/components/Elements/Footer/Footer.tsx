import React from 'react';
import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation/Navigation';
import HotQuotesLogo from '../../../assets/svgJsx/HotQuotesLogo';
import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Container } from '@mui/material';

const iconMail = <FontAwesomeIcon icon = {faEnvelope} size = '1x' />;

const Footer = () => {
  return (
    <Container maxWidth = 'lg' component = 'footer'>
      <Grid container spacing = {2}>
        <Grid xs = {10} sm = {8}>
          {/*todo: fix it*/}
          <Box
            sx = {{
              display:       'flex',
              flexDirection: 'row',
              columnGap:         2,
            }}
          >
            <NavLink
              to = '/'
              title = 'На Главную'
              className = {style.logoWrapper}
            >
              <HotQuotesLogo />
            </NavLink>
            <Navigation />
          </Box>
        </Grid>

        <Grid xs = {2} sm = {4}>
          <address className = {style.addressBlock}>
            <a
              href = '&#109;&#97;i&#108;&#116;o&#58;mail&#64;&#108;%&#54;5%67&#37;6Do&#46;%&#55;2&#117;'
              title = {'Написать разработчику'}
              className = {style.linkIcon}
            >
              {iconMail}
            </a>
          </address>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
