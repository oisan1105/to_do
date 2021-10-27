import React,{useState,useEffect} from 'react';


function RealTime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(new Date())
    },1000)
    return () => {
      window.clearInterval(id)
    }
  }, [setTime])

  return (
    <div>
      {`${time.getFullYear()} / ${time.getMonth()+1} / ${time.getDate()} / ${time.getHours()} : ${time.getMinutes()}`}
    </div>
    );
}

export default RealTime;