import { useState } from 'react';
import './Body.css';

function Lightbulb({ light }) {
  return (
    <>
      {light === 'on' ? (
        <div style={{ backgroundColor: 'orange' }}>on</div>
      ) : (
        <div style={{ backgroundColor: 'gray' }}>off</div>
      )}
    </>
  );
}

function StaticLightbulb() {
  console.log('static light bulb');
  return <div style={{ backgroundColor: 'gray' }}>off</div>;
}

export default function Body() {
  const [light, setLight] = useState('off');

  return (
    <div className='body'>
      <Lightbulb light={light} />
      <StaticLightbulb />
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
