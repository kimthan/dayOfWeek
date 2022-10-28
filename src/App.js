import React from "react";

function App() {
  const day = new Date().getDay();
  const WHOLE_WEEK = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayOfWeek = WHOLE_WEEK[day - 1];
  return (
    <div className="App h-screen flex justify-center items-center text-center">
      <div className="flex flex-col rounded-lg shadow-md justify-between pt-6 border-2 min-w-[200px] min-h-[300px] bg-gray-100">
        <h1 className="text-2xl">Day of The Week</h1>
        <h1 className="text-4xl">{dayOfWeek}</h1>
        <div className=""></div>
      </div>
    </div>
  );
}

export default App;
