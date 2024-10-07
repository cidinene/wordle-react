import './Square.css';
import {useState} from 'react';

function Square({row, column, attempt}) {
    const [letter, setLetter] = useState(' ')

    return (
      <input  disabled={row != attempt ? "true" : ""}  className="cuadrado"></input>

    );
}
export default Square;
