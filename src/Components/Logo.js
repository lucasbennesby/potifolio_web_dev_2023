import React from "react";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <div>
      <svg>
        <g
          className={styles.logoContainer}
          transform="translate(10,5)"
        >
          <g className={styles.logo}>
            <polygon
              fill="#0a192f"
              id="Shape"
              stroke="#5bebd0"
              strokeWidth="1"
              points="39 0 0 22 0 67 39 90 78 68 78 23"
            ></polygon>
            <path
              d="m 31 20 h 10 v 31 h 10 v 10 h -20 v -41 z "
              fill="#5bebd0"
              stroke="#0a192f"
              stroke-width="5"
              transform="translate(0,3)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Logo;
