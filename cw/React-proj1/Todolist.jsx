import React, { useState, useEffect } from 'react';

const name = "nagaraj";

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long',
  }).format(date);
}

const Todolist = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);


    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Hi, todo list for {name} — current time: {formatDate(now)}</p>
    </div>
  );
};

export default Todolist;
