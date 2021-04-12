import React from "react";
import Navbar from "@components/Navbar/Navbar";

import styles from "./layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <footer className="footer">footer</footer>
      <style jsx>{`
        .footer {
          background: red;
        }
        div {
          background: blue;
        }
      `}</style>
    </div>
  );
};

export default Layout;
