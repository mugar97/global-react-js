import { ComponentProps } from 'react';
import './Input.scss';

interface InputProps extends ComponentProps<'input'> {
  label?: string;
}

export const Input = (props: InputProps) => {
  const { label, ...inputProps } = props;
  return (
    <div className='input'>
      {label && <label className='input__label'>{label}</label>}
      <input className='input__input' {...inputProps} />
    </div>
  );
};
