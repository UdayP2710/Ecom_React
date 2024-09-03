import styles from "./nav.module.css";
import profile from "../../images/pro.jpg";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { fetchProduct } from "../../reducers/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cartState } from "../../reducers/cartReducer";

export function Navbar() {
  const { cart } = useSelector(cartState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  });
  return (
    <>
      <div className={styles.nav_cont}>
        <div className={styles.left}>
          <Link to={""}>
            <h1>Shopper</h1>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"product"}>
            <h3>Products</h3>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"form"}>
            <h3>Add Products</h3>
          </Link>
        </div>
        <div className={styles.right}>
          <Link to={"cart"} style={{ textDecoration: "none" }}>
            <h3>
              Cart<span>+{cart.length}</span>
            </h3>
          </Link>
          <img src={profile} />
        </div>
      </div>
      <Outlet />
    </>
  );
}
