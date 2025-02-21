import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, filterFoods } from '../FoodSlice/foodslice';
import { RootState } from '../../../Store/store';
import styles from './foodlist.module.scss';

type FoodItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
};

export const FoodList: React.FC = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state: RootState) => state.food);

  useEffect(() => {
    dispatch(filterFoods());
  }, [dispatch]);

  return (
    <div className={styles.foodContainer}>
      {filter.length > 0 ? (
        <div className={styles.foodflex}>
          {filter.map((food: FoodItem) => (
            <div key={food.id} className={styles.foodCard}>
              <img src={food.image} alt={food.name} className={styles.foodImage} />
              <p className={styles.foodName}>{food.name}</p>
              <div className={styles.foodInfo}>
                <p className={styles.foodPrice}>${food.price}</p>
                <button
                  className={styles.addToCartBtn}
                  onClick={() => dispatch(addToCart(food))}
                >
                  Add to Cart 
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No foods available.</p>
      )}
    </div>
  );
};

export default FoodList;
