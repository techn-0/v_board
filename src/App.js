import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState(["밥줘", "빵줘", "간식줘"]);
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>배고파</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...title].sort();
          setTitle(copy);
        }}
      >
        가나다순
      </button>

      <div className="list">
        <h4>{title[0]}</h4>
        <span
          onClick={() => {
            let copy = [...title];
            copy[0] = "여자코트 추천";
            setTitle(copy);
          }}
        >
          수정
        </span>
        <span onClick={() => setLike(like + 1)}>👍</span> {like}
        <p>02-17</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>02-17</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>02-17</p>
      </div>

      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default App;
