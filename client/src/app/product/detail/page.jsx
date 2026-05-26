import Breadcrumb from "@/app/components/bread-crumb/bread-crumb";
import Container from "@/app/components/container/container";
import Content from "@/app/components/container/content/content";
import React from "react";
import "./detail.css";
import SecondNav from "@/app/components/second-nav/second-nav";
import FilterItem from "@/app/components/filter-item/filter-item";
import Ads from "@/app/components/ads/ads";
import Products from "@/app/components/products/products";
import Compare from "@/app/components/compare/compare";
import CircularProgress from "@/app/components/circular-progress/circular-progress";
import TechnicalDetail from "@/app/components/technical-detail/technical-detail";
import Title from "@/app/components/title/title";
import StarRating from "./rating/star-rating";
import Ads2 from "@/app/components/ads/ads-2/ads-2";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import CommentSection from "@/app/components/comment-section/comment-section";



function page() {
  const sellers = [
    {
      id: 1,
      ghest: true,
      title: "راکیانو",
      desc: "Mobile Xiaomi Redmi Note 13 Pro (12GB 512GB 5G) Indonesia - بنفش",
      image: "seller-1.webp",
      price: "24.799.000",
    },
    {
      id: 2,
      ghest: true,
      title: "تن زیرو",
      desc: "Mobile Xiaomi Redmi Note 13 Pro (12GB 512GB 5G) Indonesia - بنفش",
      image: "seller-2.webp",
      price: "24.799.000",
    },
    {
      id: 3,
      ghest: true,
      title: "گوشی آنلاین",
      desc: "Mobile Xiaomi Redmi Note 13 Pro (12GB 512GB 5G) Indonesia - بنفش",
      image: "seller-3.webp",
      price: "24.799.000",
    },
    {
      id: 4,
      ghest: true,
      title: "آل دیجیتال",
      desc: "Mobile Xiaomi Redmi Note 13 Pro (12GB 512GB 5G) Indonesia - بنفش",
      image: "seller-4.webp",
      price: "24.799.000",
    },
    {
      id: 5,
      ghest: true,
      title: "ادبازار",
      desc: "Mobile Xiaomi Redmi Note 13 Pro (12GB 512GB 5G) Indonesia - بنفش",
      image: "seller-5.webp",
      price: "24.799.000",
    },
    {
      id: 6,
      ghest: true,
      title: "تکنولایف",
      desc: "Mobile Xiaomi Redmi Note 13 Pro (12GB 512GB 5G) Indonesia - بنفش",
      image: "seller-6.webp",
      price: "24.799.000",
    },
    {
      id: 7,
      ghest: true,
      title: "گوشی شاپ",
      desc: "Mobile Xiaomi Redmi Note 13 Pro (12GB 512GB 5G) Indonesia - بنفش",
      image: "seller-7.webp",
      price: "24.799.000",
    },
    {
      id: 8,
      ghest: true,
      title: "دارسو",
      desc: "Mobile Xiaomi Redmi Note 13 Pro (12GB 512GB 5G) Indonesia - بنفش",
      image: "seller-8.webp",
      price: "24.799.000",
    },
    {
      id: 9,
      ghest: true,
      title: "ورتوکا",
      desc: "Mobile Xiaomi Redmi Note 13 Pro (12GB 512GB 5G) Indonesia - بنفش",
      image: "seller-9.webp",
      price: "24.799.000",
    },
  ];
  return (
    <>
      <Ads2 />
      <Navbar />
      <div className="product-detail">
        <Container>
          <Content>
            <Breadcrumb />
            <div className="product-header">
              <div className="preview">
                <div className="aspect-primary">
                  <img src="../img/product-1.webp" alt="" />
                </div>
                <div className="aspect-secondary">
                  <img src="/img/product-1.webp" alt="" />
                  <img src="/img/product-1.webp" alt="" />
                  <img src="/img/product-1.webp" alt="" />
                  <img src="/img/product-1.webp" alt="" />
                </div>
              </div>
              <div className="details">
                <h3>گوشی ردمی نوت 13 پرو شیائومی </h3>
                <h5>Xiaomi Redmi Note 13 Pro</h5>
                <div className="scores">
                  <div className="score-item user-scores">
                    <div className="rating">
                      <CircularProgress progress={4.4} />
                    </div>
                    <div className="votes">
                      <span>امتیاز کاربران</span>
                      <span>از 122 رای</span>
                    </div>
                  </div>
                  <div className="score-item your-score">
                    <StarRating />
                    <span>امتیاز و نظر دهید</span>
                  </div>
                  <div className="score-item zoomit-score">
                    <div className="rating">
                      <CircularProgress progress={3.5} />
                    </div>
                    <div className="votes">
                      <span>
                        <img src="../img/zoomit-score-logo.svg" alt="" />
                        امتیاز لومیت
                      </span>
                      <span>
                        مشاهده بررسی
                        <i className="bx  bx-arrow-left-stroke bx-xs"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="actions">
                  <button className="action-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#9696a0"
                      className="!fill-grey1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0q.478.003.946.093A4.985 4.985 0 0 0 13 8c.079 1.16.62 2.24 1.5 3h.5a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2h.5A4.35 4.35 0 0 0 3 8V5a4.95 4.95 0 0 1 5-5m6 0v2h2v2h-2v2h-2V4h-2V2h2V0zm-4 14H6a2 2 0 1 0 4 0" />
                    </svg>
                    اطلاع رسانی قیمت
                  </button>
                  <button className="action-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="var(--grey-1)"
                      stroke="var(--grey-1)"
                      className="!fill-grey1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.15 9.736 9.414 8l6.293-6.293A1 1 0 1 0 14.293.293L8 6.586 1.707.293A1 1 0 1 0 .293 1.707L6.586 8 4.85 9.736a3.99 3.99 0 0 0-4.85.607l2.121 2.122-1.828 1.828a1 1 0 1 0 1.414 1.414l1.828-1.828L5.657 16a3.99 3.99 0 0 0 .607-4.85L8 9.414l1.736 1.736a3.99 3.99 0 0 0 .607 4.85l2.122-2.121 1.828 1.828a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-1.828-1.828L16 10.343a3.99 3.99 0 0 0-4.85-.607z" />
                    </svg>
                    مقایسه
                  </button>
                  <button className="action-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="var(--grey-1)"
                      className="!fill-grey1"
                      viewBox="0 0 16 16"
                    >
                      <rect rx="4" />
                      <path d="M13.5 2.3H3.9a.756.756 0 0 0-.8-.8.756.756 0 0 0-.8.8v11.2a.756.756 0 0 0 .8.8.756.756 0 0 0 .8-.8v-4h9.6z" />
                    </svg>
                    گزارش ایراد
                  </button>
                  <button className="action-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="var(--grey-1)"
                      className="!fill-grey1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 6c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .223.029.439.075.649l-3.22 2.012A2.97 2.97 0 0 0 4 5C2.346 5 1 6.346 1 8s1.346 3 3 3a2.97 2.97 0 0 0 1.855-.661l3.22 2.012c-.046.21-.075.426-.075.649 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3a2.97 2.97 0 0 0-1.855.661l-3.22-2.012C6.971 8.439 7 8.223 7 8s-.029-.439-.075-.649l3.22-2.012A2.97 2.97 0 0 0 12 6" />
                    </svg>
                    اشتراک گذاری
                  </button>
                </div>
              </div>

              <div className="chart"></div>
            </div>
          </Content>
        </Container>
        <SecondNav />
        <Ads />
        <Container>
          <Content>
            <TechnicalDetail />
            <div className="list-section" id="pricing">
              <div className="details sm:hidden lg:block">
                <div className="title">
                  <div className="shape"></div>
                  <div>قیمت گوشی</div>
                </div>
                <div className="search-field">
                  <h5>محصولات را فیلتر کنید</h5>
                  <div className="search-input">
                    <div className="icon">
                      <i className="bxr  bx-search"></i>
                    </div>
                    <input type="search" placeholder="جستجو در نتایج" />
                  </div>
                </div>
                <div className="filters">
                  <FilterItem
                    title={"قیمت (تومان)"}
                    content={"اینجا محل محتواست"}
                  />
                </div>
              </div>
              <div className="list">
                <div className="list-content">
                  <div className="sort">
                    <div className="sort-btn">
                      <i className="bxr  bx-filter"></i>
                      ارزان ترین
                    </div>
                    <div className="sort-count">{sellers.length} فروشگاه</div>
                  </div>
                  <div className="list-menu">
                    {sellers.map((seller) => (
                      <div className="list-item" key={seller.id}>
                        <div className="list-item-content">
                          <div className="item-img">
                            {sellers.favorite ? (
                              <div className="zoomit-fav-icon">
                                <i className="bx  bx-trophy-star bx-xs"></i>
                                زومیت پسند
                              </div>
                            ) : (
                              ""
                            )}
                            <img src={`../img/${seller.image}`} alt="" />
                          </div>
                          <div className="item-details">
                            <div className="title">
                              <div className="name">{seller.title}</div>
                              <div className="desc">{seller.desc}</div>
                            </div>
                            <div className="price">
                              از <span>{seller.price}</span> تومان
                              <button className="proce-btn">خرید</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Ads />
            <Compare />
            <Products />
            <div className="jambandi" id="summary">
              <Title>جمع بندی</Title>
              <div className="content">
                <div className="desc">
                  <p>
                    ردمی نوت ۱۳ پرو 5G از صفحه‌نمایش ۶٫۶۷ اینچیِ OLED با وضوح
                    1.5K و نرخ نوسازی ۱۲۰ هرتز بهره می‌برد و به‌لطف پشتیبانی از
                    استاندارد دالبی ویژن، می‌تواند تا ۶۸ میلیارد رنگ را نمایش
                    دهد. شیائومی از پوشش Gorilla Glass Victus برای محافظت از
                    نمایشگر استفاده کرده است تا مقاومت آن در مقابل اشیاء نوک‌تیز
                    و ضربات سخت بالاتر رود. با وزن ۱۸۷ گرمی ردمی نوت ۱۳ پرو 5G
                    جزو گوشی‌های نسبتا سبک و خوش‌دست بازار به‌حساب می‌آید.
                  </p>
                  <p>
                    گوشی شیائومی از دوربین اصلی با سنسور ۲۰۰ مگاپیکسلی ISOCELL
                    HP3 سامسونگ با گشودگی دیافراگم f/1.7، مجهز به سیستم فوکوس
                    خودکار تشخیص فاز و لرزشگیر اپتیکال بهره می‌برد که دوربین‌های
                    اولتراواید ۸ مگاپیکسلی و ماکرو ۲ مگاپیکسلی نیز آن را همراهی
                    می‌کنند. دوربین ردمی نوت ۱۳ پرو 5G به لزرش‌گیر الکترونیکی
                    هنگام فیلم‌برداری مجهز شده است و قابلیت ضبط فیلم‌هایی با
                    وضوح 4K و نرخ ۳۰ فریم بر ثانیه را دارد. دوربین سلفی نیز با
                    حسگری ۱۶ مگاپیکسلی، عکس‌های خوبی در حالت‌های معمولی و پرتره
                    ثبت می‌کند.
                  </p>
                  <img src="../img/product-1.webp" alt="" />
                  <p>
                    دوربین اصلی ردمی نوت ۱۳ پرو 5G روی کاغذ تفاوتی با مدل 4G
                    ندارد اما به‌دلیل پردازش‌های بهینه‌تر و پیشرفته‌تر تراشه
                    به‌کار رفته در مدل 5G، عکس‌های ثبت‌شده در شرایط نوری مختلف،
                    جزییات را بهتر نمایش می‌دهند. نسخه‌ی 4G از فیلم‌برداری 4K
                    نیز پشتیبانی نمی‌کند؛ از این رو اگر هدفتان از خرید گوشی
                    عکاسی و تولید محتوای ویدیویی است، ردمی نوت ۱۳ پرو 5G گزینه
                    مناسب‌تری به‌نظر می‌رسد.
                  </p>
                  <p>
                    برای عملکردهای پردازشی، ردمی نوت ۱۳ پرو به تراشه SD 7s Gen 2
                    با ۸ هسته پردازشی مجهز شده که عملکرد آن در اجرای بازی‌های
                    سنگین با تنظیمات گرافیکی بالا بی‌نقص است. مدل‌های موجود در
                    بازار ایران، از ۵۱۲ گیگابایت فضای ذخیره‌سازی و ۱۲/۱۶
                    گیگابایت رم بهره می‌برند تا نگرانی‌ها را در مورد حجم زیاد
                    فایل‌ها و باز کردن همزمان چندین برنامه رفع کنند.
                  </p>
                  <p>
                    باتری ۵۱۰۰ میلی‌آمپرساعتی ردمی نوت ۱۳ پرو با شارژر بسیار
                    سریع ۶۷ واتی در حدود ۴۰ دقیقه کاملا شارژ می‌شود و برای
                    کاربری معمولی روزانه با یک‌ ساعت بازی کردن، یک روز را دوام
                    خواهد آورد. متاسفانه گوشی شیائومی با رابط کاربری MIUI 14
                    مبتنی بر اندروید ۱۳ روانه بازار شده اما به سیستم‌عامل
                    HyperOS قابل‌بروزرسانی است و تا سه سال نسخه‌های جدیدتر
                    اندروید را دریافت می‌کند. برای اطلاعات بیشتر و مشاهده تمام
                    تست‌ها و تفاوت‌های مدل‌های 5G و 4G ردمی نوت ۱۳ پرو،{" "}
                    <a href="#">
                      <strong>بررسی ردمی نوت ۱۳ پرو 5G و 4G</strong>
                    </a>{" "}
                    را در لومیت ازدست ندهید.
                  </p>
                  <div className="features">
                    <div className="pros">
                      <div className="shape">
                        <div></div>
                      </div>
                      <div className="pros-content">
                        <div className="title">نکات مثبت</div>
                        <ul>
                          <li>
                            <i className="bx  bx-plus"></i>
                            دوربین باکیفیت
                          </li>
                          <li>
                            <i className="bx  bx-plus"></i>
                            عملکرد خوب باتری
                          </li>
                          <li>
                            <i className="bx  bx-plus"></i>
                            نمایشگر پرنور با دقت رنگ عالی
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="cons">
                      <div className="shape">
                        <div></div>
                      </div>
                      <div className="cons-content">
                        <div className="title">نکات منفی</div>
                        <ul>
                          <li>
                            <i className="bx  bx-minus"></i>
                            قیمت‌گذاری بحث‌برانگیز درمقایسه‌با رقبا
                          </li>
                          <li>
                            <i className="bx  bx-minus"></i>
                            پشتیبانی نرم‌افزاری ضعیف‌تر از رقبا
                          </li>
                          <li>
                            <i className="bx  bx-minus"></i>
                            استفاده از MIUI به‌جای HyperOS
                          </li>
                          <li>
                            <i className="bx  bx-minus"></i>
                            گواهی IP ضعیف‌تر از رقبا
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="users-votes-section">
              <Title>امتیاز کاربران</Title>
              <div className="content-x">
                <div className="votes-num">
                  <div>
                    <span>4.4/5</span>از 123 رای
                  </div>
                  <div className="vote-num-item">
                    <div>
                      <i className="bx  bxs-star"></i>1
                    </div>
                    <div className="progress">
                      <div></div>
                    </div>
                    <div className="num">9</div>
                  </div>
                  <div className="vote-num-item">
                    <div>
                      <i className="bx  bxs-star"></i>2
                    </div>
                    <div className="progress">
                      <div></div>
                    </div>
                    <div className="num">0</div>
                  </div>
                  <div className="vote-num-item">
                    <div>
                      <i className="bx  bxs-star"></i>3
                    </div>
                    <div className="progress">
                      <div></div>
                    </div>
                    <div className="num">9</div>
                  </div>
                  <div className="vote-num-item">
                    <div>
                      <i className="bx  bxs-star"></i>4
                    </div>
                    <div className="progress">
                      <div></div>
                    </div>
                    <div className="num">18</div>
                  </div>
                  <div className="vote-num-item">
                    <div>
                      <i className="bx  bxs-star"></i>5
                    </div>
                    <div className="progress">
                      <div></div>
                    </div>
                    <div className="num">87</div>
                  </div>
                </div>
                <div className="votes-desc">
                  <p>به این محصول چه امتیازی می‌دی؟</p>
                  <span>
                    امتیاز و نظرت به سایر کاربران کمک می‌کنه که بهتر تصمیم
                    بگیرند
                  </span>
                  <StarRating />
                </div>
              </div>
            </div>
            <CommentSection />
          </Content>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default page;
