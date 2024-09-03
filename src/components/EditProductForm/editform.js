import { useRef } from "react";
import styles from "../AddForm/addpro.module.css";
import { editApiRequest } from "../../reducers/reducer";
import { useDispatch } from "react-redux";
export function EditForm({ item }) {
  const dispatch = useDispatch();
  const title = useRef();
  const description = useRef();
  const price = useRef();
  function handelEdit(e, id) {
    e.preventDefault();
    const itemtitle = title.current.value;
    const itemdes = description.current.value;
    const itemprice = price.current.value;
    const itemobj = {
      title: itemtitle,
      description: itemdes,
      price: itemprice,
      id,
      image: item.image,
    };
    console.log(itemobj);
    dispatch(editApiRequest(itemobj));
    alert("Edited Sucessfully");
  }
  return (
    <>
      <div className={styles.cont}>
        <h1>Edit Product.....</h1>
        <hr></hr>
        <form
          onSubmit={(e) => handelEdit(e, item.id)}
          className={styles.form_cont}
        >
          <div>
            <label>Title</label>
            <input ref={title} type="text" placeholder={item.title} />
          </div>
          <div>
            <label>Description</label>
            <input
              ref={description}
              type="text"
              placeholder={item.description}
            />
          </div>
          <div>
            <label>Price</label>
            <input ref={price} type="text" placeholder={item.price} />
          </div>
          <button>Edit</button>
        </form>
      </div>
    </>
  );
}
