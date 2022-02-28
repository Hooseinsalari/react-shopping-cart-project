import React, { useState } from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./Navbar.module.css";

// icons
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartState = useSelector((state) => state.cartState);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.nav}>
      <div
        className={isOpen ? styles.openNav : styles.navToggle}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <div className={styles.navBars}></div>
      </div>
      <div className={isOpen ? styles.openMenu : styles.navItems}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/products" className={styles.navLink}>
          Store
        </Link>
        <Link to="/favorite" className={styles.navLink}>
          Favorite
        </Link>
        <Link to="/about" className={styles.navLink}>
          About
        </Link>
      </div>
      <div className={styles.navCart}>
        <Link to="/cart" className={styles.navLogo}>
          <span>
            <FaShoppingCart className={styles.cartIcon} />
          </span>
        </Link>
        <span className={styles.proCount}>{cartState.itemsCounter}</span>
      </div>
    </div>
  );
};

export default Navbar;
