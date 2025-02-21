import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import imgeAllfood from "../../../assets/Images/imgeAllfood.jpg";
import styles from './login.module.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <img src={imgeAllfood} alt="Food" className={styles.ImgeAllFood} />
        <Typography variant="h5" className={styles.title}>
          Login
        </Typography>
        <form onSubmit={handleLogin} className={styles.form}>
          <TextField
            label="Email"
            type="email"
            variant="standard"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              disableUnderline: false,
            }}
            className={styles.input}
          />
          <TextField
            label="Password"
            type="password"
            variant="standard"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              disableUnderline: false,
            }}
            className={styles.input}
          />
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            className={styles.button}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
