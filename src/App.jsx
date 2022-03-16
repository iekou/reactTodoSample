import { useState } from "react";
import { InputTodo } from "./component/InputTodo";
import { InCompleteList } from "./component/InCompleteList";
import { CompleteList } from "./component/CompleteList";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteList, setIncompleteList] = useState([]);
  const [completeList, setCompleteList] = useState([]);

  const onChangeTodo = (event) => setTodoText(event.target.value);
  const onClickAddTodo = () => {
    if (todoText === "") return;
    const newIncompleteList = [...incompleteList, todoText];
    setIncompleteList(newIncompleteList);
    setTodoText("");
  };

  const onClickComplete = (index) => {
    const newIncompleteList = [...incompleteList];
    const newCompleteList = [...completeList, incompleteList[index]];
    newIncompleteList.splice(index, 1);
    setIncompleteList(newIncompleteList);
    setCompleteList(newCompleteList);
  };

  const onClickDelete = (index) => {
    const newIncompleteList = [...incompleteList];
    newIncompleteList.splice(index, 1);
    setIncompleteList(newIncompleteList);
  };

  const onClickReturn = (index) => {
    const newCompleteList = [...completeList];
    const newInCompleteList = [...incompleteList, completeList[index]];
    newCompleteList.splice(index, 1);
    setIncompleteList(newInCompleteList);
    setCompleteList(newCompleteList);
  };

  return (
    <>
      <h1>TODOアプリ</h1>
      <InputTodo
        todoText={todoText}
        onChangeTodo={onChangeTodo}
        onClickAddTodo={onClickAddTodo}
      />
      <InCompleteList
        incompleteList={incompleteList}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteList completeList={completeList} onClickReturn={onClickReturn} />
    </>
  );
};
