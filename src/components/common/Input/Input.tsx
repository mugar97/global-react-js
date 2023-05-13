import { Component, ComponentProps } from 'react';
import './Input.scss';
import _ from 'lodash';

interface InputProps extends ComponentProps<'input'> {
  label?: string;
}

export class Input extends Component<InputProps> {
  id: string;
  ariaLabel: string;

  constructor(props: InputProps) {
    super(props);
    this.id = props.id || _.uniqueId('input_');
    this.ariaLabel = this.props.label || this.props.placeholder || 'Input field';
  }
  render() {
    const { label, ...inputProps } = this.props;
    return (
      <div className='input'>
        {label && (
          <label htmlFor={this.id} className='input__label'>
            {label}
          </label>
        )}
        <input id={this.id} className='input__input' {...inputProps} aria-label={this.ariaLabel} />
      </div>
    );
  }
}
