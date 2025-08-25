import{useState, useEffect} from "react";
function App(){
  const[count, setCount]=useState(1);
  function increaseCount(){
    
    setCount(function (currentCount){
      return currentCount+1;
    });

  }
  useEffect(function (){
    console.log("above setinterval")
    setInterval(increaseCount,1000)

  },[count]);

return <div>

    <h1>Count:{count}</h1>
  </div>

}
export default App;