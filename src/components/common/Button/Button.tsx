import { ComponentProps } from 'react';
import './Button.scss';

interface ButtonProps extends ComponentProps<'button'> {
  customStyle?: 'primary' | 'secondary' | 'tertiary';
  label: string;
}

export const Button = ({ customStyle = 'primary', label, ...props }: ButtonProps) => {
  return (
    <button className={['button', `button--${customStyle}`].join(' ')} {...props}>
      {label}
    </button>
  );
};
