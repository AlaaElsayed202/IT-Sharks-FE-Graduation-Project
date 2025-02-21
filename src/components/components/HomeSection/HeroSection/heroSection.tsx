import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import hero from "../../../../assets/Images/hero.e3ef74be.png";
import styles from "./hero.module.scss";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {IconHero} from "../../../../components/components/HomeSection/IconHero/iconhero";
export const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroSection}>
     
      <div className={styles.textContent}>
        <h3 className={styles.title}>Easy way to make an order</h3>
        
      
        <p className={styles.subtitle}>
          <span className={styles.highlight}>HUNGRY?</span>{" "}
          <span className={styles.smallText}>Just wait</span>
          <br />
          <span className={styles.highlight}>food at your door</span>
        </p>

        <h6 className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!
        </h6>

        <div className={styles.buttons}>
          <Button className={styles.orderBtn}>Order Now</Button>
          <Button className={styles.seeFoodBtn} component={Link} to="/Foods">
            See All Food
          </Button>
        </div>
        <div className={styles.iconHero}>
      <p>
        <DirectionsCarIcon className={styles.icon} /> No shipping charge
      </p>
      <p>
        <CheckCircleIcon className={styles.icon} /> 100% secure checkout
      </p>
    </div>
      </div>
   
     
      <img className={styles.heroImage} src={hero} alt="Hero" />
    </div>
  );
};
