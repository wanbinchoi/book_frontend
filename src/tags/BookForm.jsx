import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

let BookForm = () => {
  const [no, setNo] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [publisher, setPublisher] = useState("");

  const saveBook = async (e) => {
    e.preventDefault();
    const book = new FormData();
    book.append("no", no);
    book.append("title", title);
    book.append("price", price);
    book.append("qty", qty);
    book.append("publisher", publisher);

    await axios.post("");
  };
  return (
    <div>
      <h2>도서등록</h2>
      <hr />
      <form onSubmit={saveBook}>
        도서번호 :{" "}
        <input type="text" name="no" onChange={(e) => setNo(e.target.value)} />
        <br />
        도서명 :{" "}
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        가격 :{" "}
        <input
          type="text"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        수량 :{" "}
        <input
          type="text"
          name="qty"
          onChange={(e) => setQty(e.target.value)}
        />
        <br />
        출판사 :{" "}
        <input
          type="text"
          name="publisher"
          onChange={(e) => setPublisher(e.target.value)}
        />
        <br />
        <button type="submit">등록</button>
        <button type="reset">다시입력</button>
      </form>
    </div>
  );
};
export default BookForm;
