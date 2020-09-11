import React from 'react';
import 'styled-components/macro';

function App() {
  return (
    <div
      css={`
        width: 100vw;
        text-align: center;
        margin-top: 100px;
      `}
    >
      <h2>App bootstraped with React, Styled-Components and Styled-System</h2>
      <p
        css={`
          color: rgba(0, 0, 0, 0.8);
          font-size: 20px;
        `}
      >
        Get Started
      </p>
    </div>
  );
}

export default App;
