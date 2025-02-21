import styles from "./servies.module.scss";

export const Services: React.FC = () => {
  return (
    <div className={styles.services}>
      <h2 className={styles.title}>What we serve</h2>
      <p className={styles.subtitle}>
        Just sit back at home, <br /> 
        <span>we will take care</span>
      </p>
      <p className={styles.description}>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, officiis?
      </p>
      <p className={styles.description}>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.
      </p>
</div>
  );
};
