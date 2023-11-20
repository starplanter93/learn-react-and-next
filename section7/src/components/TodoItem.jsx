import './TodoItem.css';

export default function TodoItem() {
  return (
    <div className='TodoItem'>
      <input type='checkbox' />
      <h4 className='content'>투두</h4>
      <div className='date'>작성일</div>
      <button>삭제</button>
    </div>
  );
}
