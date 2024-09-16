import React, { useState, useCallback } from 'react';
import throttle from 'lodash.throttle';

function ScrollTracker() {
  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = useCallback(throttle(() => {
    setScrollTop(window.scrollY);
    console.log('Scroll Top:', window.scrollY);
  }, 2000), []);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div >
      <p>Vị trí cuộn hiện tại: {scrollTop}px</p>
      {[...Array(5)].map((_, index) => (
        <p key={index}>Đoạn văn bản số {index + 1}</p>
      ))}
    </div>
  );
}

export default ScrollTracker;
