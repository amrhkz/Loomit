import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="content">
          <h5>بخش محصولات لومیت</h5>
          <h1>
            قیمت و مشخصات ده‌ها هزار محصول رو مقایسه و ارزون‌ترین فروشنده اون رو
            پیدا کن
          </h1>
          <div className="search-field">
            <div className="icon">
              <i className="bx  bx-search"></i>
            </div>
            <input type="text" placeholder="دنبال چه محصولی میگردی؟" />
          </div>
        </div>
        <div className="image">
          <img
            srcSet="/img/shop-landing.14a6d5fd.webp?w=640&q=75 640w, /img/shop-landing.14a6d5fd.webp?w=750&q=75 750w, /img/shop-landing.14a6d5fd.webp?w=828&q=75 828w, /img/shop-landing.14a6d5fd.webp?w=1080&q=75 1080w, /img/shop-landing.14a6d5fd.webp?w=1200&q=75 1200w, /img/shop-landing.14a6d5fd.webp?w=1920&q=75 1920w"
            src="/img/shop-landing.14a6d5fd.webp"
            alt="Banner Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
