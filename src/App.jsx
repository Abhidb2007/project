import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup when component unmounts
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default App;
