/*eslint-disable react/no-unescaped-entities*/
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SideNavigation = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <div style={{ width: '300px', padding: '16px', height:'100%', backgroundColor: 'black', color:'white' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: '16px', top: '16px' }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" style={{ marginBottom: '16px', textAlign: 'center' }}>
          Welcome to Our App
        </Typography>
        <Divider style={{ margin: '8px 0' }} />
        <List>
          <ListItem button sx={{ "&:hover": { boxShadow: '0px 0px 10px rgba(255,255,255,0.8)' } }}>
            <ListItemText>
              <Typography variant="body1">New Releases</Typography>
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ "&:hover": { boxShadow: '0px 0px 10px rgba(255,255,255,0.8)' } }}>
            <ListItemText>
              <Typography variant="body1">Best Selling</Typography>
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ "&:hover": { boxShadow: '0px 0px 10px rgba(255,255,255,0.8)' } }}>
            <ListItemText>
              <Typography variant="body1">Sport's Wear</Typography>
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ "&:hover": { boxShadow: '0px 0px 10px rgba(255,255,255,0.8)' } }}>
            <ListItemText>
              <Typography variant="body1">Casual Wear</Typography>
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ "&:hover": { boxShadow: '0px 0px 10px rgba(255,255,255,0.8)' } }}>
            <ListItemText>
              <Typography variant="body1">Men's Fashion</Typography>
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ "&:hover": { boxShadow: '0px 0px 10px rgba(255,255,255,0.8)' } }}>
            <ListItemText>
              <Typography variant="body1">Women's Fashion</Typography>
            </ListItemText>
          </ListItem>
        </List>
        <Divider style={{ margin: '8px 0' }} />
        <Typography variant="subtitle1" style={{ marginTop: '8px', color: 'white' }}>
          Explore More
        </Typography>
        <List>
          <ListItem button sx={{ "&:hover": { boxShadow: '0px 0px 10px rgba(255,255,255,0.8)' } }}>
            <ListItemText>
              <Typography variant="body2">Featured Collections</Typography>
            </ListItemText>
          </ListItem>
          <ListItem button sx={{ "&:hover": { boxShadow: '0px 0px 10px rgba(255,255,255,0.8)' } }}>
            <ListItemText>
              <Typography variant="body2">Special Discounts</Typography>
            </ListItemText>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default SideNavigation;
