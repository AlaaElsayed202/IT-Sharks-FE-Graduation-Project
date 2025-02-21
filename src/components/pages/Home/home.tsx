import {HeroSection} from "../../components/HomeSection/HeroSection/heroSection"
import {Categories}  from "../../components/HomeSection/Catigory/catigory"
import {IconHero}  from "../../components/HomeSection/IconHero/iconhero"
import {Services}  from "../../components/HomeSection/Servies/servies"
import {ServiceOptions} from "../../components/HomeSection/ServerOption/serveroption"
import {FoodFilter} from "../../components/FoodFilter/foodfilter"
import {FoodList} from "../../components/FoodList/foodlist"
import {DeliverySection} from"../../components/HomeSection/Delivery/delivery"
import HotPizza from "../../components/HomeSection/HotPizza/hotPizza"
import {Carousel} from "../../components/HomeSection/Carousel/Carousel"
const Home: React.FC = () => {

  return (
    <div className="home-container">
      <HeroSection />
      <IconHero />
      <Categories />
      <Services />
      <ServiceOptions />
      <FoodFilter />
      <FoodList />
      <DeliverySection/>
      <HotPizza/>
      <Carousel/>
    </div>
  );
};

export default Home;
