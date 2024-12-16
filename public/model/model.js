import React, { useState } from 'react';

const UnityEmbed = () => {
  const [showUnity, setShowUnity] = useState(false);

  const handleButtonClick = () => {
    setShowUnity(true);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button 
        onClick={handleButtonClick} 
        style={{
          padding: '10px 20px', 
          fontSize: '16px', 
          cursor: 'pointer', 
          marginBottom: '20px'
        }}
      >
        Show Unity Game
      </button>

      {showUnity && (
        <div 
          style={{
            width: '800px', 
            height: '600px', 
            margin: '0 auto', 
            border: '2px solid #ccc', 
            overflow: 'hidden'
          }}
        >
          <iframe
            src="/index.html"
            title="Unity Game"
            style={{ width: '100%', height: '100%', border: 'none' }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default UnityEmbed;
