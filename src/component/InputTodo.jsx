export const InputTodo = (props) => {
  const { todoText, onChangeTodo, onClickAddTodo } = props;
  return (
    <>
      <div className="input-area">
        <input
          placeholder="Todoを入力"
          value={todoText}
          onChange={onChangeTodo}
        />
        <button onClick={onClickAddTodo}>追加</button>
      </div>
    </>
  );
};
