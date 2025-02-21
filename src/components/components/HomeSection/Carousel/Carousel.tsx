import persion from "../../../../assets/Images/persion.jpg"
import persion2 from "../../../../assets/Images/persion2.jpg"
import persion3 from "../../../../assets/Images/persion3.jpg"
import network from "../../../../assets/Images/network.png"
import styles from "./Carousel.module.scss"
export const Carousel:React.FC=()=>{

 
return(
<>
<div className="carousel">
   <h3>
   Testimonial
   </h3>
   <h1>What our customers are saying</h1>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!</p>
   <div className={styles.carousel}>
       <p>
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!
       <img src={persion} alt=""/>
       </p>

   </div>

   <div className={styles.carousel}>
       <p>
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!
       <img src={persion2} alt=""/>
       </p>

   </div>
   <div className={styles.carousel}>
       <p>
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!
       <img src={persion3} alt=""/>
       </p>

   </div>
<img src={network} alt=""/>
</div>
</>
)
}