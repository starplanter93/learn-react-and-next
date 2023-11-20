import './TodoEditor.css';

export default function TodoEditor() {
  return (
    <div className='TodoEditor'>
      <input placeholder='새로운 todo' />
      <button>추가</button>
    </div>
  );
}
