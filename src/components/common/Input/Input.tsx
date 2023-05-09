import { ComponentProps } from 'react';
import './Input.scss';
import _ from 'lodash';

interface InputProps extends ComponentProps<'input'> {
  label?: string;
}

export const Input = (props: InputProps) => {
  const { label, ...inputProps } = props;
  const inputId = inputProps.id || _.uniqueId('input_');
  const ariaLabel = label || inputProps.placeholder || 'Input field';
  return (
    <div className='input'>
      {label && (
        <label htmlFor={inputId} className='input__label'>
          {label}
        </label>
      )}
      <input id={inputId} className='input__input' {...inputProps} aria-label={ariaLabel} />
    </div>
  );
};
