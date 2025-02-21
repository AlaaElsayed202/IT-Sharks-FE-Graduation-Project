
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory, filterFoods } from '../FoodSlice/foodslice';
import pizza from '../../../assets/Images/pizza(1).png'
import  Fastfood  from "../../../assets/Images/Fastfood.png";
import bread from "../../../assets/Images/bread.png"
import styles from "./liststyle.module.scss"; 

export const FoodFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleCategoryChange = (category: string) => {
    dispatch(setCategory(category));
    dispatch(filterFoods());
  };

  return (
  <>
 
    <h2 className={styles.title}>Popular Foods</h2>
    <div className={styles.filterContainer}>

      <div className={styles.buttonGroup}>
        <button onClick={() => handleCategoryChange('all')} className={styles.filterButton}>
          All
        </button>
        <button onClick={() => handleCategoryChange('burger')} className={styles.filterButton}>
          <img src={Fastfood} className={styles.icon} /> Burgers
        </button>
        <button onClick={() => handleCategoryChange('pizza')} className={styles.filterButton}>
          <img src={pizza} className={styles.icon} /> Pizzas
        </button>
        <button onClick={() => handleCategoryChange('bread')} className={styles.filterButton}>
          <img src={bread} className={styles.icon} /> Bread
        </button>
      </div>
    </div>
    </>
  );
};
