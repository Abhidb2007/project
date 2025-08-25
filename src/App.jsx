import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  function increaseCount() {
    setCount(count + 1);
  }
  

  return (
    <div>
      
        <div
          style={{
            borderRadius: 20,
            backgroundColor: "pink",
            padding: 10,
            width: 40,
            height: 40,
            marginRight: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          {count}
        
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
        width={100}
        
      />
      <br />
      
    </div>
  );
}

export default App;
