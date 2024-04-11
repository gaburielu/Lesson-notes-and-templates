import { useState, useEffect } from "react";

export default function Clock() {
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      setInterval(() => {
        setCounter(count => count )
      }, 1000);
    }, [])
  
    return (
      <p>{counter/2} seconds have passed.</p>
    );
  }