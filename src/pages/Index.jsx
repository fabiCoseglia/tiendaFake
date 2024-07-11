import { BannerHome } from "../components/bannerHome/BannerHome";
import { CardsCategory } from "../components/cardsCategory/CardsCategory";
import { CirclesHome } from "../components/circlesHome/CirclesHome";
import { SliderProducts } from "../components/silderProducts/SliderProducts";

export const Index = () => {
  return (
    <>
      <BannerHome  />
      <CirclesHome />
      <CardsCategory />
      <SliderProducts/>
    </>
  );
}
