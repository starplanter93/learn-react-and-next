import './TodoItem.css';

export default function TodoItem({
  id,
  isDone,
  content,
  createdDate,
  onUpdate,
}) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  return (
    <div className='TodoItem'>
      <input type='checkbox' checked={isDone} onChange={onChangeCheckbox} />
      <h4 className='content'>{content}</h4>
      <div className='date'>{new Date(createdDate).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
}
