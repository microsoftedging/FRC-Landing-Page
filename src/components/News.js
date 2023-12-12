import React from 'react'

export default function News({ title, content, customHeaders }) {
  return (
    <div className="news">
      <h2>{title}</h2>
      {customHeaders && (
        <div className="custom-headers">
          {customHeaders.map((header, index) => (
            <div key={index}>{header}</div>
          ))}
        </div>
      )}
      <div className="content">{content}</div>
    </div>
  );
};