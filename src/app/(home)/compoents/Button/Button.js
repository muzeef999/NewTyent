import React, { useState } from 'react';
import style from '../Form/Form.module.css'

const Button = ({name}) => {

  const [scaling, setScaling] = useState(false);
  return (
    <div>
      <button onMouseEnter={() => setScaling(true)} onMouseLeave={() => setScaling(false)} className={style.button}  >{name}</button>
    </div>
  )
}

export default Button