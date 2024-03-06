import { useEffect, useState } from "react";

const BasicUseEffect = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listner Added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listner Removed");
    };
  }, []);

  useEffect(() => {
    document.title = `size: ${width} X ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Width:{width}</p>
      <p>Window Height:{height}</p>
    </>
  );
};

export default BasicUseEffect;
