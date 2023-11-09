import './Body.css';
import Button from './Button';

function ButtonChild() {
  return <div>button child</div>;
}

export default function Body() {
  const buttonProps = {
    text: '1번버튼',
    color: 'red',
  };
  return (
    <div className='body'>
      <h1>Body</h1>
      <Button {...buttonProps}>
        <ButtonChild />
      </Button>
      <Button text={'2번버튼'} />
      <Button text={'3번버튼'} />
    </div>
  );
}
