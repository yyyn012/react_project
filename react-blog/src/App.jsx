import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [subject, setSubject] = useState(["HTML", "CSS", "REACT"]);
  const [like, setLike] = useState(0);

  const onClick = () => {
    setLike(like + 1);
  };

  const changeSubject = () => {
    let newArray = [...subject];
    newArray[0] = "JAVA";
    setSubject(newArray);
  };
  // state 자체를 변경할 수 없기 때문에 복사본(deep copy)을 만들어서 수정한다.
  // let newArray = subject; <= 이건 복사가 아니라 값 공유(reference data type의 특징)이기 때문에 알맞은 코드가 아니다.

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <div className="list">
        <h3>
          {subject[0]}
          <span onClick={onClick}>👍</span>
        </h3>
        <p>
          <p>({like})</p>2월 17일
        </p>
        <button onClick={changeSubject}>click</button>
        <hr />
      </div>

      <div className="list">
        <h3>
          {subject[1]}
          <span>👍</span>
        </h3>
        <p>
          <p>({like})</p>2월 17일
        </p>
        <hr />
      </div>

      <div className="list">
        <h3>
          {subject[2]}
          <span>👍</span>
        </h3>
        <p>
          <p>({like})</p>2월 17일
        </p>
        <hr />
      </div>

      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>Title</h2>
      <p>Date</p>
      <p>Content</p>
    </div>
  );
}

export default App;
