import styles from "./product.module.css";
import { productState } from "../../reducers/reducer";
import { useDispatch, useSelector } from "react-redux";
import { addCartApiCall } from "../../reducers/cartReducer";
import { deleteApiRequest } from "../../reducers/reducer";
import { Link } from "react-router-dom";
export function Home({ setItem }) {
  const { product } = useSelector(productState);
  console.log(typeof product);
  console.log(product);
  function handelRemove(id) {
    dispatch(deleteApiRequest(id));
    alert("Remove Successfully...");
  }
  function handelAddToCart(item) {
    dispatch(addCartApiCall(item));
    alert("Added To Cart Successfully.....");
  }

  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.home_cont}>
        <div className={styles.card_cont}>
          {product.map((item, index) => {
            return (
              <div className={styles.card}>
                <div className={styles.left}>
                  <div className={styles.img_div}>
                    <img src={item.image} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <hr />
                    <h3>${item.price}</h3>
                  </div>
                </div>
                <div className={styles.right}>
                  <div>
                    <h4>{item.description}</h4>
                  </div>
                  <div className={styles.btn}>
                    <Link to={"edit"}>
                      {" "}
                      <button
                        onClick={() => setItem(item)}
                        className={styles.btn1}
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handelRemove(item.id)}
                      className={styles.btn2}
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => handelAddToCart(item)}
                      className={styles.btn3}
                    >
                      add To Cart
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
