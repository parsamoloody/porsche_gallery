import React from 'react';

const UnityEmbed = () => {

  return (
    <div className='w-full h-full'>
      <div
        style={{
          height: '600px',
          margin: '0 auto',
          border: '2px solid #ccc',
          overflow: 'hidden',
        }}
      >
        <iframe
          src="model/index.html"
          title="Unity Car Model"
          style={{ width: '100%', height: '100%', border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

export default UnityEmbed;
