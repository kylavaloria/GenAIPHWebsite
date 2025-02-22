import React from "react";

const Event = ({ title, date, time, location, venue, image }) => {
  return (
    <div className="text-center w-100 max-w-90">
      {/* Event Image */}
      <div className="w-65 aspect-[1/1] mb-4 flex justify-center items-center mx-auto shadow-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Event Title */}
      <h3 className="text-base font-bold text-[#ffffff] mb-2">{title}</h3>

      {/* Event Details */}
      <div className="mt-6 mb-6">
        <p className="text-xs/6 text-[#ffffff]">{date}</p>
        <p className="text-xs/6 text-[#ffffff]">{time}</p>
        <p className="text-xs/6 text-[#ffffff]">{venue}</p>
        <p className="text-xs/6 text-[#ffffff]">{location}</p>
      </div>

      {/* See More Button */}
      <button className="bg-[#3DDC97] text-white px-7 py-2 text-xs rounded-full font-semibold mb-3 hover:bg-[#27B7B4] cursor-pointer">
        See More
      </button>
    </div>
  );
};

export default Event;
