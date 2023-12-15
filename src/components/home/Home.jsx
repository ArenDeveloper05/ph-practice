
import MainPageBanner from '../main_page_banner/MainPageBanner'
import ProductCategories from '../productCategories/ProductCategories'

const Home = () => {
  return (
      <>
        <div className="home">
          <MainPageBanner/>
          <ProductCategories/>
        </div>;
      </>
  )
};

export default Home;
