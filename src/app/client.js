// client.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

export const SideNavigation = ({ isDrawerOpen, handleDrawerClose }) => {
  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
      <List>
        <ListItem button onClick={handleDrawerClose}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={handleDrawerClose}>
          <ListItemText primary="Features" />
        </ListItem>
        {/* Add more items as needed */}
      </List>
    </Drawer>
  );
};
