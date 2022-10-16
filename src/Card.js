import logo from './logo.svg';
import './App.css';

function Card(props) {

  let text
  if (props.price > props.avg) {
    text = props.price - props.avg
  }

  return (
    <div className='card'>
        <p>{props.name}</p>
        <p>{props.avg}</p>
        <p>{text}</p>
    </div>

  );
}

export default Card;
