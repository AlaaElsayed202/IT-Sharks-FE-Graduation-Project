import React from 'react';
import logo from '../../../assets/Images/logo.png';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Facebook, GitHub, YouTube, LinkedIn } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const handleSendClick = () => {
    alert("You sent your email");
  };

  // على سبيل المثال، نفتح الروابط في تبويب جديد
  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        <div className={styles.footerColumn}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <h2>Tasty Treat</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            pariatur accusamus.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h3>Delivery Time</h3>
          <p>
            <strong>Sunday - Thursday:</strong> 10:00am - 11:00pm
          </p>
          <p>
            <strong>Friday - Saturday:</strong> Off day
          </p>
        </div>
      
        <div className={styles.footerColumn}>
          <h3>Contact</h3>
          <p>
            <strong>Location:</strong> ZindaBazar, Sylhet-3100, Bangladesh
          </p>
          <p>
            <strong>Phone:</strong> 01712345678
          </p>
          <p>
            <strong>Email:</strong> example@gmail.com
          </p>
        </div>
    
        <div className={styles.footerColumn}>
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter</p>
          <TextField
            type="email"
            placeholder="Enter your email"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSendClick} color="primary">
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <div className={styles.social}>
            <h3>Follow Us</h3>
            <div className={styles.socialIcons}>
              <Facebook
                fontSize="large"
                onClick={() => handleClick('https://facebook.com')}
                style={{ cursor: 'pointer' }}
              />
              <GitHub
                fontSize="large"
                onClick={() => handleClick('https://github.com')}
                style={{ cursor: 'pointer' }}
              />
              <YouTube
                fontSize="large"
                onClick={() => handleClick('https://youtube.com')}
                style={{ cursor: 'pointer' }}
              />
              <LinkedIn
                fontSize="large"
                onClick={() => handleClick('https://linkedin.com')}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2022 Tasty Treat. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
