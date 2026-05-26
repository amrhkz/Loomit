"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./bread-crumb.css";

// دیکشنری ترجمه مسیرها
const translations = {
  product: "لومیت",
  list: "محصولات",
  mobile: "قیمت گوشی",
  about: "درباره ما",
  contact: "تماس با ما",
  blog: "بلاگ",
  categories: "دسته‌بندی‌ها",
  cart: "سبد خرید",
  checkout: "تسویه‌حساب",
  profile: "پروفایل",
  orders: "سفارش‌ها",
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // اگر صفحه‌ی اصلی بود (یعنی هیچ segmentی وجود نداشت)، هیچی نشون نده
  if (pathSegments.length === 0) return null;

  return (
    <nav className="bread-crumb">
      <ol className="bread-item">
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;
          const label = translations[segment] || decodeURIComponent(segment);

          return (
            <li key={href} className="bread-item-content">
              {index > 0 && <i className="bx bx-chevron-left bx-xs"></i>}

              {isLast ? (
                <span className="last-item">{label}</span>
              ) : (
                <Link href={href}>{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
