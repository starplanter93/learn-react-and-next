import './TodoItem.css';

export default function TodoItem({
  id,
  isDone,
  content,
  createdDate,
  onUpdate,
  onDelete,
}) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className='TodoItem'>
      <input type='checkbox' checked={isDone} onChange={onChangeCheckbox} />
      <h4 className='content'>{content}</h4>
      <div className='date'>{new Date(createdDate).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}
