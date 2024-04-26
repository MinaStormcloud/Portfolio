import React, { useState } from 'react';

export default function ReadMore({ initialText, fullText }) {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <p>
        <span style={{ display: showFullText ? 'none' : 'inline' }}>
          {initialText.substring(0, 100)}...
        </span>
        <span style={{ display: showFullText ? 'inline' : 'none' }}>
          {fullText}
        </span>
      </p>
      <button class="mb-2 text-sm font-semibold text-blue-600" onClick={handleReadMore}>
        {showFullText ? 'Hide text' : 'Read more'}
      </button>
    </div>
  );
}