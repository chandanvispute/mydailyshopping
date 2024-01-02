'use client'
import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import SideNavigation from './SideNavigation';
import Login from './login';
import LockIcon from '@mui/icons-material/Lock';

const HomePage = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleLoginClick = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#2196F3' }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Next.js Material-UI App
          </Typography>
          <Button color="inherit" onClick={handleLoginClick}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <SideNavigation isOpen={isDrawerOpen} onClose={handleDrawerClose} />

      <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '20px' }}>
        {isLoginOpen && <Login onClose={handleLoginClose} />}

        <Typography variant="h3" component="div" gutterBottom>
          Welcome to Next.js with Material-UI
        </Typography>
        <Typography variant="body1" paragraph>
          This is a beautiful and interactive single-page design.
        </Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
        <Grid container spacing={4} style={{ marginTop: '30px' }}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Web Developer
                </Typography>
                <Typography variant="body2" color="textSecondary">
                Bridging the Gap Between Excellence in Competitive Programming, Development ,Algorithms and Aesthetics.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Problem Solver
                </Typography>
                <Typography variant="body2" color="textSecondary">
                Coding Competitions Elevating Algorithms, Elevating Software and Creative Code.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" style={{ marginTop: '30px' }}>
          <Grid item>
            <Image
              src="/Crowned_Ccpyin.jpg"
              alt="Image Placeholder"
              width={50}
              height={50}
            />
          </Grid>
        </Grid>
        <Typography variant="h4" style={{ marginTop: '30px' }}>
          Learn More
        </Typography>
        <Typography variant="body1" paragraph>
          Explore the amazing features of our app and discover how it can benefit you.
        </Typography>
        <Button variant="outlined" color="primary">
          Read More
        </Button>
      </Container>
    </div>
  );
};

export default HomePage;
