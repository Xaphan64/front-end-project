

import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      // TM
      <div style={styles.left}>MovieNest (TM) 2026</div>

      // EULA
      <div>
        <a
          href="https://www.themoviedb.org/terms-of-use"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          EULA
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    backgroundColor: "#222",
    color: "#fff",
  },
  left: {
    fontSize: "14px",
  },
  link: {
    color: "#4dabf7",
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default Footer;
