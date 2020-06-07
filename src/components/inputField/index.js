import React from 'react';
import './index.css';

/**
 * Input Box
 */
const InputBox = ({
  label,
  name,
  id,
  handleInputChange,
  type,
  disabled,
  hintData,
  maxLength,
  defaultValue,
  inputRef,
  width,
  labelFontSize,
  fieldType,
  error,
  placeholder,
  value
}) => {
  return (
    <div width={width} className='form-group'>
      <label className='label-field'>{label}</label>
      {fieldType === 'input' && (
        <input
          type={type}
          name={name}
          id={id}
          ref={inputRef}
          value={value}
          className='input-field'
          defaultValue={defaultValue}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      )}
      {fieldType === 'textarea' && (
        <textarea
          className='textarea-field'
          type={type}
          name={name}
          id={id}
          ref={inputRef}
          defaultValue={defaultValue}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      )}
      <span className='error-message'>{error}</span>
    </div>
  );
};

InputBox.defaultProps = {
  fieldType: 'input',
  inputChangeHandler: () => {}
};

export default InputBox;
