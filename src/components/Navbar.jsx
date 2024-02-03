import React from 'react';
import { Stack, AppBar, Toolbar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import { SearchBar } from './';

const Navbar = () => (
  <AppBar position="sticky" elevation={0} sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
    <Toolbar>
      <Stack direction="row" alignItems="center" width="100%" justifyContent="space-between" sx={{ py: 1 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={logo} alt="logo" height="45" />
        </Link>
        <SearchBar />
      </Stack>
    </Toolbar>
  </AppBar>
);

export default Navbar;
