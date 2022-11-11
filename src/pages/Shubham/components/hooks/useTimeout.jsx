import React, { useEffect, useState } from "react";

const useTimeout = (time) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, time);
  }, []);
  return { ready };
};

export default useTimeout;