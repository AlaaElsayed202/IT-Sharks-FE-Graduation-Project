import React from 'react';
import deliveryImg from "../../../../assets/Images/location.c2a80861.png"; 
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from './delivery.module.scss';

export const DeliverySection: React.FC = () => {
  return (
    <div className={styles.deliverySection}>
      <div className={styles.content}>
        <h3 className={styles.mainTitle}>Why Tasty Treat?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus.<br/>
          Tempora reprehenderit a corporis velit, laboriosam vitae ullam, repellat<br/>
          illo sequi odio esse iste fugiat dolor, optio incidunt eligendi deleniti!
        </p>
        <h3>
          <CheckCircleIcon className={styles.icon} /> Fresh and tasty foods
        </h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
        <h3>
          <CheckCircleIcon className={styles.icon} /> Quality support
        </h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
        <h3>
          <CheckCircleIcon className={styles.icon} /> Order from any location
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={deliveryImg} alt="Fast Delivery" className={styles.deliveryImg} />
      </div>
    </div>
  );
};
