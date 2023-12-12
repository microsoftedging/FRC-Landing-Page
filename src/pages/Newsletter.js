import React from 'react'
import News from './News';

export default function newsletter() {
  return (
    <div>
      <News
      title="Article title"
      content="something"
      header={['Header 1', 'Header 2', 'Header 3']}
      />
    </div>
  );
};