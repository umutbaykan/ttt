import React from 'react';
import Mark from '../mark/Mark'
import './Board.css'

const Board = () => {

  return (
    <>
    <Mark xNext={true}/>
    <Mark xNext={false}/>
    <Mark xNext={true}/>
    </>
    )
}

export default Board