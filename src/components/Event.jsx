import React from "react";

const Event = ({ title, date, time, location, venue }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-sm">
      {/* Placeholder for Image */}
      <div className="bg-gray-300 w-full h-40 rounded-md mb-4"></div>

      {/* Event Title */}
      <h3 className="text-lg font-bold text-[#ffffff] mb-2">{title}</h3>

      {/* Event Details */}
      <p className="text-sm text-[#ffffff]">{date}</p>
      <p className="text-sm text-[#ffffff]">{time}</p>
      <p className="text-sm text-[#ffffff]">{venue}</p>
      <p className="text-sm text-[#ffffff] mb-4">{location}</p>

      {/* See More Button */}
      <button className="bg-[#3DDC97] text-white px-4 py-2 rounded-lg font-semibold">
        See More
      </button>
    </div>
  );
};

export default Event;
