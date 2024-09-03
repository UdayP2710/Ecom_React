import styles from "../home/product.module.css";
import { productState } from "../../reducers/reducer";
import { useDispatch, useSelector } from "react-redux";
import { cartState } from "../../reducers/cartReducer";
import { removeCartApiRequest } from "../../reducers/cartReducer";
import { productActions } from "../../reducers/reducer";
export function Cart() {
  const { cart } = useSelector(cartState);
  const dispatch = useDispatch();
  function handelRemove(id) {
    dispatch(removeCartApiRequest(id));
    alert("Remove Successfully...");
  }

  return (
    <>
      <div className={styles.home_cont}>
        <h1>Welcome to the Cart</h1>
        <hr></hr>
        <div className={styles.card_cont}>
          {cart.map((item, index) => {
            return (
              <div className={styles.card}>
                <div className={styles.left}>
                  <div className={styles.img_div}>
                    <img src={item.image} />
                  </div>
                  <div>
                    <h1>{item.title}</h1>
                    <hr />
                    <h3>{item.price}</h3>
                  </div>
                </div>
                <div className={styles.right}>
                  <div>
                    <h4>{item.description}</h4>
                  </div>
                  <div className={styles.btn}>
                    <button
                      onClick={() => handelRemove(item.id)}
                      className={styles.btn2}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
