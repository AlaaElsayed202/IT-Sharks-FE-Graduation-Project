import download1 from "../../../../assets/Images/download1.png";
import download from "../../../../assets/Images/download.png";
import dowenload2 from "../../../../assets/Images/download2.png";
import "./serverOption.scss"

 export const ServiceOptions: React.FC = () => {
  return (
   <div className="service-options">

   <div>
    <h3>Quick Delivery</h3>
   <img src={download1} alt="" className="service-item"/>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</p>
   </div>

   <div>
    <h3>Super Dine In</h3>
   <img src={download} alt="" className="service-item"/>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</p>
   </div>

   <div>
    <h3>Easy Pick Up </h3>
   <img src={dowenload2} alt="" className="service-item"/>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</p>
   </div>

   </div>
  );
    }


