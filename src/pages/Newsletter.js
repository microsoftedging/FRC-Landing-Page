import React from 'react'

export default function Newsletter({ title, content, header }) {
    return (
      <div className="newsletter">
        <h2>{title}</h2>
        {header && (
            <div className="header">
                {header.map((header, index))}
        )}
      </div>  
    )
}

export default Newsletter