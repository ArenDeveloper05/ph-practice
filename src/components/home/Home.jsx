
import MainPageBanner from './main_page_banner/MainPageBanner'
import ProductCategories from './product_categories/ProductCategories'
import ProductsAbout from './products_about/ProductsAbout';
import Gifts from '../Gifts/Gifts'
import TopGifts from '../home/top_gifts/TopGifts'
import AboutUsSection from '../home/about_us_section/AboutUsSection'

const Home = () => {
  return (
        <div className="home">
            <MainPageBanner/>
            <ProductCategories/>
            <ProductsAbout/>
            <TopGifts/>
            <AboutUsSection/>
        </div>
  )
};

export default Home;
