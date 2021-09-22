import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectInfo,
  selectValidate,
  setInfo,
  setValidate,
} from '../../../features/form/formSlice';
import { checkValidInput } from '../../../utils/formValidation';
import { TextInput } from './styles';

const InputText = ({ name, placeholder, className, isNumber }) => {
  const [focusLost, setFocusLost] = useState(false);
  const [value, setValue] = useState('');
  const [inputInfo, setInputInfo] = useState({});

  const infos = useSelector(selectInfo);
  const dispatch = useDispatch();

  const handleValidate = () => {
    checkValidInput(name, value);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    setInputInfo(infos?.find((e) => e.tag === name));
  }, [infos]);

  const handleFocus = () => {
    dispatch(setInfo(checkValidInput(name, value)));
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <TextInput className={className}>
      <div className={inputInfo?.error}>
        <span>{name}</span>
        <span>{inputInfo?.errorMsg}</span>
      </div>
      <input
        className={inputInfo?.error}
        type={!isNumber ? 'text' : 'number'}
        placeholder={placeholder}
        onBlur={handleFocus}
        // onFocus={handleFocus}
        value={value}
        onChange={handleInput}
      />
    </TextInput>
  );
};

export default InputText;
