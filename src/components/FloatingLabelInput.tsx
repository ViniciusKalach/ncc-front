import React, { useState } from 'react';
import './FloatingLabelInput.css';

interface FloatingLabelInputProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  id: string;
  required: boolean;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  type,
  placeholder,
  name,
  id,
  required,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`floating-label-input ${isFocused ? 'focused' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        required={required}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default FloatingLabelInput;
