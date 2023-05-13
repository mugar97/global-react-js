import React, { ChangeEvent } from 'react';
import './SortControl.scss';

const Options = {
  RELEASE_DATE: 'Release date',
  TITLE: 'Title',
} as const;

type Options = (typeof Options)[keyof typeof Options];

interface SortControlProps {
  initialOption?: Options;
  onChange: (value: Options) => void;
}

interface SortControlState {
  current?: Options;
}

export class SortControl extends React.Component<SortControlProps, SortControlState> {
  state: SortControlState;

  constructor(props: SortControlProps) {
    super(props);
    this.state = {
      current: props.initialOption || Options.RELEASE_DATE,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event: ChangeEvent<HTMLSelectElement>) {
    const selectedValue = event.target.value as Options;
    this.setState({
      current: selectedValue,
    });
    this.props.onChange(selectedValue);
  }

  render() {
    return (
      <div className='SortControl'>
        <label className='SortControl__Label' htmlFor='sort-control'>
          Sort by
        </label>
        <select
          className='SortControl__Select'
          id='sort-control'
          value={this.state.current}
          onChange={this.handleOnChange}
        >
          {Object.values(Options).map((opt) => (
            <option value={opt} key={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
