import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

let BookForm = () => {
  const [no, setNo] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [publisher, setPublisher] = useState("");

  const navigate = useNavigate();

  const saveBook = async (e) => {
    e.preventDefault();
    const book = { no, title, price, qty, publisher };
    const res = await axios.post("http://54.165.239.214:8080/api/books", book);
    navigate("/");
  };
  return (
    <div>
      <h2>도서등록</h2>
      <hr />
      <form onSubmit={saveBook}>
        도서번호 :{" "}
        <input type="text" value={no} onChange={(e) => setNo(e.target.value)} />
        <br />
        도서명 :{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        가격 :{" "}
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        수량 :{" "}
        <input
          type="text"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <br />
        출판사 :{" "}
        <input
          type="text"
          value={publisher}
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
