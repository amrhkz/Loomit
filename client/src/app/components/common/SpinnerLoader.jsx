// common/SpinnerLoader.js
import "./spinner-loader.css";
export default function SpinnerLoader() {
  return (
    <div className="inset-0 z-50 backdrop-blur-sm spinner-container">
      <div className="spinner-content">
        <img width={120} src="/img/loomit-01.png" alt="" />
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
          <g
            fill="var(--primary-1)"
            className="animated-three-dots_svg__nc-loop-dots-3-32-icon-f"
          >
            <circle cx="4" cy="16" r="3" />
            <circle cx="16" cy="16" r="3" />
            <circle cx="28" cy="16" r="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}
