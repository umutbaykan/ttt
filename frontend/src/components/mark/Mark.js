import { useState } from 'react';
import './Mark.css'

const Mark = ({xNext}) => {

  const [mark, setMark] = useState(' ')
  let symbol;
  
  if (xNext) {
    symbol = 'X'    
  } else {
    symbol = 'O'
  }

  const handleMarkPress = () => {
    if (mark === ' ') {
    setMark(symbol) } else {
      return
    }
  }

  return (
    <button onClick={handleMarkPress} className='mark'>{mark}</button>
    )
}

export default Mark