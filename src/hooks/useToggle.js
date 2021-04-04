import { useState, useCallback } from "react";

const useToggle = (initialValue = false) => {
  const [toggle, setToggle] = useState(initialValue);

  const handler = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return [toggle, setToggle, handler];
};

export default useToggle;
