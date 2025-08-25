import{useState, useEffect} from "react";
function App(){
  const[count, setCount]=useState(1);
  function increaseCount(){
    console.log("increase count called" + count);
    setCount(function (currentCount){
      return currentCount+1;
    });

  }
  useEffect(function (){
    console.log("aboveSetInterval")
    setInterval(increaseCount,1000)

  },[]);

return <div>
    {count}
  </div>

}
export default App;