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
  const getMinutes = (time:Date) =>{
    const Minutes = time.getMinutes()
    if(Minutes < 10){
      return '0' + Minutes;
    }else{
      return Minutes;
    }
  }

  return (
    <div className='RealTime'>
      {`${time.getFullYear()} / ${time.getMonth()+1} / ${time.getDate()} / ${time.getHours()} : ${getMinutes(time)}`}
    </div>
    );
}

export default RealTime;