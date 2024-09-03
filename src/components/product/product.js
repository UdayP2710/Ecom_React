import styles from "../home/product.module.css";
import { productState } from "../../reducers/reducer";
import { useDispatch, useSelector } from "react-redux";
import { addCartApiCall } from "../../reducers/cartReducer";

export function Product() {
  const { product } = useSelector(productState);
  console.log(product);
  const dispatch = useDispatch();
  function handelAddToCart(item) {
    dispatch(addCartApiCall(item));
    alert("Added To Cart Successfully.....");
  }

  return (
    <>
      <div className={styles.home_cont}>
        <h1>Welcome to Product Details .....</h1>
        <hr></hr>
        <div className={styles.card_cont}>
          {product.map((item, index) => {
            return (
              <div className={styles.card}>
                <div className={styles.left}>
                  <div className={styles.img_div}>
                    <img src={item.image} />
                  </div>
                  <div>
                    <h1>{item.title}</h1>
                    <hr />
                    <h3>${item.price}</h3>
                  </div>
                </div>
                <div className={styles.right}>
                  <div>
                    <h4>{item.description}</h4>
                  </div>
                  <div className={styles.btn}>
                    <button
                      onClick={() => handelAddToCart(item)}
                      className={styles.btn3}
                    >
                      Add To Cart
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
