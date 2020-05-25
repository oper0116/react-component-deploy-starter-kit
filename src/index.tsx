import * as React from 'react';

interface IProps {
  text: string;
}

const Component = (props: IProps) => {
  return <div>{props.text}</div>
}

export default Component;