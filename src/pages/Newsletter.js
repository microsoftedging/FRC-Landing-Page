import React from 'react';
import Newsletter from './News';

export default function Newsletter() {
  newsletterData = {
    header: 'CYBERLIONS NEWSLETTER',
    date: 'November 18, 2023',
    articles: [
      { title: 'Article Title 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { title: 'Article Title 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    ],
    additionalContent: '20024 Larry Le Mill Rights Reserved CYBERLIONS 8521'
  };

  return (
    <div>
      <News {...newsletterData} />
    </div>
  );
};