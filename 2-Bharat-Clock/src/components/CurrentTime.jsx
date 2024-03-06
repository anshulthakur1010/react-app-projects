import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
      clearInterval(intervalId);
    }, 1000);

    return () => {};
  }, []);

  return (
    <p className="lead">
      This is the Current Time : {time.toLocaleDateString()} -{""}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
