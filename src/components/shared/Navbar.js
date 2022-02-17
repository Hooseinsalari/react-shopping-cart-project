import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

// context
import { CartContext } from "../../context/CartContextProvider";

// styles
import styles from "./Navbar.module.css";

// icons
import { FaShoppingCart } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const { state } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.nav}>
        <div className={isOpen ? styles.openNav : styles.navToggle} onClick={() => setIsOpen(prevState => !prevState)}>
            <div className={styles.navBars}></div>
        </div>
      <div className={isOpen ? styles.openMenu : styles.navItems}>
          <Link to="/"  className={styles.navLink} >Home</Link>
          <Link to="/products" className={styles.navLink} >Store</Link>
          <Link to="/" className={styles.navLink} >Contact</Link>
          <Link to="/" className={styles.navLink} >About</Link>
      </div>
    <div className={styles.navCart}>
        <Link to="/cart" className={styles.navLogo} ><span><FaShoppingCart /></span></Link>
        <span className={styles.proCount}>{state.itemsCounter}</span>
    </div>      
    </div>
  );
};

export default Navbar;
