export const CompleteList = (props) => {
  const { completeList, onClickReturn } = props;
  return (
    <div className="complete-area">
      <p className="title">完了済のTodo</p>
      <ul>
        {completeList.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickReturn(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
