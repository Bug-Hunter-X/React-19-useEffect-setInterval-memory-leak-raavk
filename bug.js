```javascript
// App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval without cleanup
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    // Missing cleanup function to clear the interval
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default App;
```