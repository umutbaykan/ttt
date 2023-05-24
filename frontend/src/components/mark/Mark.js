import { useState } from 'react';
import './Mark.css'

const Mark = ({symbol, callback, gridKey}) => {

  const [mark, setMark] = useState(' ')

  const handleMarkPress = () => {
    if (mark === ' ') {
    setMark(symbol) 
    callback(gridKey, symbol)
    } else {
      return
    }
  }

  return (
    <button onClick={handleMarkPress} className='mark'>{mark}</button>
    )
}

export default Mark