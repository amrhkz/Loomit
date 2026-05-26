import Ads from "./components/ads/ads";
import Ads2 from "./components/ads/ads-2/ads-2";
import Banner from "./components/banner/banner";
import Category2 from "./components/category-2/category-2";
import Category from "./components/category/category";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";

export default function Home() {
  return (
    <>
      <Ads2 />
      <Navbar />
      <Banner />
      <Category />
      <Category2 />
      <Ads />
      <Products type={"گوشی"} />
      <Category2 />
      <Products type={"لوازم خانگی"} />
      <Products type={"قطعات کامپیوتر"} />
      <Ads />
      <Products type={"لپ‌تاپ‌ها و کامپیوترها"} />
      <Products type={"تجهیزات بازی"} />
      <Products type={"تجهیزات صوتی"} />
      <Products type={"محصولات"} />
      <Footer />
    </>
  );
}
