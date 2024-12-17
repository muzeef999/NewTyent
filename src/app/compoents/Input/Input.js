import React, { useId } from "react";
import style from "../Form/Form.module.css"

const Input = ({ type, name, label, value, placeholder, onChange }) => {
  const uniqueid = useId();
  return (
    <div>
      <div>
        <label className={style.formLabel} htmlFor={uniqueid}>{label}</label>
      </div>

      <input  className={style.formInput} 
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
