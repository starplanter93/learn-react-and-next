import { useState } from 'react';
import './Body.css';

export default function Body() {
  const [light, setLight] = useState('off');
  console.log(light);

  return (
    <div className='body'>
      {light}
      <button
        onClick={() => {
          setLight('on');
        }}
      >
        켜기
      </button>
      <button
        onClick={() => {
          setLight('off');
        }}
      >
        끄기
      </button>
    </div>
  );
}
