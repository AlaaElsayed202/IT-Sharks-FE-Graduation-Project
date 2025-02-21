import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Burger1 from '../../../assets/Images/Burger1.jpg';
import Burger2 from '../../../assets/Images/Burger2.jpg';
import Burger3 from '../../../assets/Images/Burger3.jpg';

import pizza1 from '../../../assets/Images/pizza1.jpg';
import pizza2 from '../../../assets/Images/pizza2.jpg';
import pizza3 from '../../../assets/Images/pizza3.jpg';
import pizza4 from '../../../assets/Images/pizza4.jpg';
import pizza5 from '../../../assets/Images/pizza5.jpg';
import pizza6 from "../../../assets/Images/pizza6.jpg"

import bread1 from '../../../assets/Images/bread1.png';
import bread2 from '../../../assets/Images/bread2.png';
import bread3 from '../../../assets/Images/bread3.png';


type TFoodItem = {
  id: number;
  name: string;
  category: string;
  image: string;
  price:number;

};


type FoodState= {
  foods: TFoodItem[];
  filter: TFoodItem[];
  category: string;
}


const initialState:FoodState = {
  
  foods: [
 
    { id: 1, name: ' Royal Cheese Burger ', category: 'burger', image: Burger1 ,price:24},
    { id: 2, name: ' Classic Burger', category: 'burger', image: Burger2 ,price:24},
    { id: 3, name: ' Cheese Burger', category: 'burger', image: Burger3 ,price:24},
    { id: 4, name: ' Chicken Burger ', category: 'burger', image: Burger1 ,price:24},
   
    { id: 5, name: ' Vegetarian Pizza', category: 'pizza', image: pizza1,price:115 },
    { id: 6, name: ' Pizza With Mushroom', category: 'pizza', image: pizza2,price:110 },
    { id: 7, name: 'Maxican Gren Wave', category: 'pizza', image: pizza3 ,price:110},
    { id: 8, name: ' Thin Cheese Pizza', category: 'pizza', image: pizza4 ,price:110},
    { id: 9, name: ' SeaFood Pizza', category: 'pizza', image: pizza5 ,price:115},
    { id: 10, name: ' Double Cheese Margherita ', category: 'pizza', image: pizza6 ,price:110},

    { id: 11, name: 'Crunchy Bread', category: 'bread', image: bread1,price:35 },
    { id: 12, name: ' Delicious Bread', category: 'bread', image: bread2 ,price:35},
    { id: 13, name: ' Loaf Bread', category: 'bread', image: bread3,price:35 },
  ],
  filter: [],
  category: 'all', 
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    filterFoods(state) {
      state.filter = state.category === 'all'
        ? state.foods
        : state.foods.filter(food => food.category === state.category);
    },
    addToCart(state, action: PayloadAction<TFoodItem>) {
      
    },
  },
});
export const { setCategory, filterFoods, addToCart } = foodSlice.actions;
export default foodSlice.reducer;
