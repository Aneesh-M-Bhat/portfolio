import { useState, useEffect } from "react";

export const useIntersection = (element) => {
  const [isVisible, setIsVisible] = useState(false);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // if (entry.isIntersecting) {
      setIsVisible(entry.isIntersecting);
      //   observer.unobserve(element.current);
      // }
    }, options);

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, [element]);

  return isVisible;
};
