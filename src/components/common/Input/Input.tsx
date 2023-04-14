import { ComponentProps } from 'react';
import './Input.scss';

export const Input = ({ ...props }: ComponentProps<'input'>) => {
  return <input className={'input'} {...props} />;
};
