import { useRef } from "react";
import styles from "./addpro.module.css";
import { addProductToDbRequest } from "../../reducers/reducer";
import { useDispatch } from "react-redux";
export function Form() {
  const dispatch = useDispatch();
  const name = useRef();
  const description = useRef();
  const price = useRef();
  const rate = useRef();
  function handelAdd(e) {
    e.preventDefault();
    const date = new Date();
    const id = date.toString();
    const data = {
      id: id,
      title: name.current.value,
      description: description.current.value,
      price: price.current.value,
      rate: rate.current.value,
      image:
        "https://t4.ftcdn.net/jpg/05/81/84/71/360_F_581847176_eF540XqFGHDdGPZxyh5NtWHNzgs0XFk6.jpg",
    };
    dispatch(addProductToDbRequest(data));
    alert("Product Added to the DB......");
  }
  return (
    <>
      <div className={styles.cont}>
        <h1>Add Product</h1>
        <hr></hr>
        <form onSubmit={(e) => handelAdd(e)} className={styles.form_cont}>
          <div>
            <label>Name</label>
            <input ref={name} type="text" />
          </div>
          <div>
            <label>Description</label>
            <input ref={description} type="text" />
          </div>
          <div>
            <label>Price</label>
            <input ref={price} type="text" />
          </div>
          <div>
            <label>Rating</label>
            <input ref={rate} type="text" />
          </div>
          <button>Add</button>
        </form>
      </div>
    </>
  );
}
