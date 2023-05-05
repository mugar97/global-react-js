import React, { ChangeEvent } from 'react';

const Options = {
  RELEASE_DATE: 'release date',
  TITLE: 'title',
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
      <>
        <label htmlFor='sort-control'>Sort by:</label>
        <select id='sort-control' value={this.state.current} onChange={this.handleOnChange}>
          <option value={Options.RELEASE_DATE}>Release date</option>
          <option value={Options.TITLE}>Title</option>
        </select>
      </>
    );
  }
}