import { useState } from 'react';
import './Body.css';

export default function Body() {
  const [value, setValue] = useState({
    name: '',
    gender: '',
    bio: '',
  });

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='body'>
      <div>
        <input name='name' value={value.name} onChange={onChange} />
      </div>
      <div>
        <select name='gender' value={value.gender} onChange={onChange}>
          <option value=''>밝히지 않음</option>
          <option value='male'>남성</option>
          <option value='female'>여성</option>
        </select>
      </div>
      <div>
        <textarea name='bio' value={value.bio} onChange={onChange} />
      </div>
    </div>
  );
}
