import styles from "./logo.module.css";

export default function Logo() {
  const bgColor = "#fbfaf5";
  return (
    <div className={styles.logo} style={{ backgroundColor: bgColor }}>
      <img className={styles.letter} src="letter-outline.svg" />

      <svg
        className={styles.hexagon}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(172 64) scale(1.6 1.6)">
          <path
            id="anim-hexa"
            fill={bgColor}
            d="M86.6 0L173.2 50L173.2 150L86.6 200L0 150L0 50Z"
          ></path>
          <animateTransform
            xlinkHref="#anim-hexa"
            attributeName="transform"
            type="rotate"
            from="0 86.6 100"
            to="360 86.6 100"
            dur="60s"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  );
}
