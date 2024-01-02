import React from 'react';
import { TextField, Button } from '@mui/material';
const Login = ({ onClose }) => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
        <h2 style={{color:'black'}}>Login</h2>
        <TextField name="usernameOrEmail" label="Username or Email" variant="outlined" margin="normal" required /><br></br>
        <TextField name="password" label="Password" type="password" variant="outlined" margin="normal" required /><br></br>
        <Button type="submit" variant="contained" color="primary">
            Login
        </Button>
        <button onClick={onClose} style={{color:'black', margin:'20px'}}>Close</button>
      </div>
    </div>
  );
};

export default Login;
