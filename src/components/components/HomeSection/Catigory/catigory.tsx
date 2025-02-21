import Fastfood from "../../../../assets/Images/Fastfood.png";
import pizza from "../../../../assets/Images/pizza(1).png";
import AsianFood from "../../../../assets/Images/AsianFood.png";
import RowMeet from "../../../../assets/Images/RowMeet(2).png";

import "./catigory.scss"
;

 export const Categories: React.FC = () => {
  return (
    <div className="categories">

     <div>
   
    <img src={Fastfood} alt="fast food"/>
    <span>Fastfood</span>
     </div>

      <div>
        
      <img src={pizza} alt="pizza"/>
      <span>Pizza</span>
      </div>

      <div>
     
      <img src={AsianFood} alt="asian food"/>
      <span> Asian Food</span>
      </div>

     <div>
    <img src={RowMeet} alt="row meat"/>
     <span> Row Meet</span>
     </div>
    
    </div>
  );
};


