import React from 'react';

export default function News({ header, date, articles, additionalContent }) {
  return (
    <div className="newsletter">
      <h1>{header}</h1>
      <p>Last Updated {date}</p>
      <div className="articles">
        {articles.map((article, index) => (
          <div key={index} className="article">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
      {additionalContent && <div className="additional-content">{additionalContent}</div>}
    </div>
  );
};