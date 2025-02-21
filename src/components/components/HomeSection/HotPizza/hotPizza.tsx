import React from 'react';
import pizza1 from "../../../../assets/Images/pizza1.jpg";
import pizza6 from "../../../../assets/Images/pizza6.jpg";
import pizza3 from "../../../../assets/Images/pizza3.jpg";
import pizza5 from "../../../../assets/Images/pizza5.jpg";
import styles from "./hotpizza.module.scss";

type PizzaItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;  
};

const HotPizza: React.FC = () => {
  const pizzas: PizzaItem[] = [
    { id: 1, name: 'Vegetarian Pizza', category: 'pizza', image: pizza1, price: 115 },
    { id: 2, name: 'Double Cheese Margherita', category: 'pizza', image: pizza6, price: 110 },
    { id: 3, name: 'Mexican Green Wave', category: 'pizza', image: pizza3, price: 110 },
    { id: 4, name: 'Seafood Pizza', category: 'pizza', image: pizza5, price: 115 },
  ];

  return (
    <div className={styles.foodContainer}>
      {pizzas.map((pizza) => (
        <div key={pizza.id} className={styles.foodCard}>
          <img src={pizza.image} alt={pizza.name} className={styles.foodImage} />
          <p className={styles.foodName}>{pizza.name}</p>
          <div className={styles.foodBottom}>
            <p className={styles.foodPrice}>${pizza.price}</p>
            <button className={styles.button}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotPizza;
