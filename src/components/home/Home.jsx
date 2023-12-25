
import MainPageBanner from './main_page_banner/MainPageBanner'
import ProductCategories from './productCategories/ProductCategories'
import ProductsAbout from './productsAbout/ProductsAbout';

const Home = () => {
  return (
      <>
        <div className="home">
          <MainPageBanner/>
          <ProductCategories/>
          <ProductsAbout/>
        </div>;
      </>
  )
};

export default Home;
