import { useEffect, useState } from "react";
import axios from "axios";

let BookList = () => {
  const [list, setList] = useState([]);

  //도서목록을 가져 오는 함수
  const fetchBooks = async () => {
    const res = await axios.get("http://54.165.239.214:8080/api/books");
    setList(res.data);
  };

  //컴포넌트가 처음 만들어 질때 (마운트될 때) 도서 목록 가져오기
  useEffect(
    () => {
      fetchBooks();
    },
    [] /*[]=> 최초의 한번만 실행되도록, 어떤 변수가 변경될 때마다 실행하고 싶으면 [] 안에 변수명을 쓴다 */
  );
  let tr_list = list.map((book) => {
    return (
      <>
        <tr key={book.no}>
          <td>{book.no}</td>
          <td>{book.title}</td>
          <td>{book.price}</td>
          <td>{book.qty}</td>
          <td>{book.publisher}</td>
        </tr>
      </>
    );
  });
  return (
    <>
      <h2>도서목록</h2>
      <table>
        <thead>
          <tr>
            <td>도서번호</td>
            <td>도서명</td>
            <td>가격</td>
            <td>수량</td>
            <td>출판사</td>
          </tr>
        </thead>
        <tbody>{tr_list}</tbody>
      </table>
    </>
  );
};
export default BookList;
