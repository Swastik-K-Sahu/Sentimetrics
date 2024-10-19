import React, { useState } from 'react';

function SentimentForm({ onResult }) {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/sentiment/upload', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      onResult(data);
    } else {
      const response = await fetch('/api/sentiment/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(text)
      });
      const data = await response.json();
      onResult(data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg p-4 bg-white shadow-md rounded-lg">
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
      />
      <input
        type="file"
        className="mb-4 w-full text-sm text-gray-500"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
      >
        Analyze Sentiment
      </button>
    </form>
  );
}

export default SentimentForm;
