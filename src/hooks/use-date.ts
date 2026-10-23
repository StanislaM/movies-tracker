import { useEffect, useState } from "react";

export function useDate() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentDate(new Date());
  }, []);

  return currentDate;
}
