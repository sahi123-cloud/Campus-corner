import React, { useEffect } from 'react';
import Sidebar from './sidebar';

function Events() {
  // Effect to update the Sidebar top position when component mounts
  useEffect(() => {
    // Change the top position of the Sidebar to 0px when component mounts
    document.querySelector('.sidebar').style.top = '0px';
    // Clean up function to reset the top position when component unmounts
    return () => {
      document.querySelector('.sidebar').style.top = '77px'; // Reset top position
    };
  }, []);

  return (
    <>
      <Sidebar />
      <div>Events</div>
    </>
  );
}

export default Events;
