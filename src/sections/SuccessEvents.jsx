import React from "react";
import Event from "../components/Event.jsx";

const events = [
  {
    title: "Future Forward: Gen AI Philippines' First Flagship",
    date: "Tuesday, April 16",
    time: "6:30 PM - 9:00 PM GMT+8",
    venue: "White Cloak Technologies, Inc.",
    location: "Pasig, Metro Manila",
  },
  {
    title: "QLITAN: Design Dilemmas - Navigating Ethics in Generative AI",
    date: "Saturday, May 18",
    time: "8:00 PM - 9:30 PM GMT+8",
    venue: "QBO Innovation Hub",
    location: "Makati, Metro Manila",
  },
  {
    title: "Education 4.0: Generative AI and The Future of Learning",
    date: "Friday, July 19",
    time: "8:00 PM - 9:30 PM GMT+8",
    venue: "eCloudvalley Philippines",
    location: "Taguig, Metro Manila",
  },
];

const SuccessEvents = () => {
  return (
    <section className="bg-gradient-to-b from-[#009688] to-[#00695C] py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Successful Events</h2>

        {/* Events Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {events.map((event, index) => (
            <Event key={index} {...event} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center space-x-2">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="w-3 h-3 bg-white rounded-full opacity-50"></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessEvents;
