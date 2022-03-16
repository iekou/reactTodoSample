export const InCompleteList = (props) => {
  const { incompleteList, onClickComplete, onClickDelete } = props;

  return (
    <>
      <div className="incomplete-area">
        <p className="title">実行中のTodo</p>
        <ul>
          {incompleteList.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
