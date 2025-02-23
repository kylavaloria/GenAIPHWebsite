import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Event from "../components/Event.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    title: "Future Forward: Gen AI Philippines' First Flagship",
    date: "Tuesday, April 16",
    time: "6:30 PM - 9:00 PM GMT+8",
    venue: "White Cloak Technologies, Inc.",
    location: "Pasig, Metro Manila",
    image: "./src/assets/events-img/Future-Forward.png",
  },
  {
    title: "QLITAN: Design Dilemmas - Navigating Ethics in Generative AI",
    date: "Saturday, May 18",
    time: "8:00 PM - 9:30 PM GMT+8",
    venue: "QBO Innovation Hub",
    location: "Makati, Metro Manila",
    image: "./src/assets/events-img/QLITAN.png",
  },
  {
    title: "Education 4.0: Generative AI and The Future of Learning",
    date: "Friday, July 19",
    time: "8:00 PM - 9:30 PM GMT+8",
    venue: "eCloudvalley Philippines",
    location: "Taguig, Metro Manila",
    image: "./src/assets/events-img/Education-4.0.png",
  },
  {
    title: "AI in Business: Future Trends and Applications",
    date: "Monday, August 12",
    time: "7:00 PM - 9:00 PM GMT+8",
    venue: "WeWork Makati",
    location: "Makati, Metro Manila",
    image: "./src/assets/events-img/AI-Business.png",
  },
  {
    title: "The Ethics of AI: Risks & Responsibilities",
    date: "Sunday, September 22",
    time: "5:00 PM - 7:00 PM GMT+8",
    venue: "Google Philippines",
    location: "Taguig, Metro Manila",
    image: "./src/assets/events-img/AI-Ethics.png",
  },
];

const SuccessEvents = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Adjust number of events per page based on screen size
  const ITEMS_PER_PAGE = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < events.length) {
      setDirection(1);
      setStartIndex(startIndex + ITEMS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setDirection(-1);
      setStartIndex(startIndex - ITEMS_PER_PAGE);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#27B7B4] to-[#125655] py-16 px-6 sm:px-10 lg:px-20 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Successful Events</h2>

        {/* Events Grid with Smooth Animation */}
        <div className="overflow-hidden w-full flex justify-center relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={startIndex}
              className="flex space-x-4"
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 100 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {events.slice(startIndex, startIndex + ITEMS_PER_PAGE).map((event, index) => (
                <Event key={index} {...event} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Arrows */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 border-2 border-white opacity-60 text-white p-2 rounded-full shadow-lg disabled:opacity-20 bg-transparent enabled:hover:bg-white enabled:hover:text-black transition"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          disabled={startIndex + ITEMS_PER_PAGE >= events.length}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 border-2 border-white opacity-60 text-white p-2 rounded-full shadow-lg disabled:opacity-20 bg-transparent enabled:hover:bg-white enabled:hover:text-black transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default SuccessEvents;
