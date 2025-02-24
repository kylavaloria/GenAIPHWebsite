import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Event from "../components/Event.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const SuccessEvents = () => {
  const [events, setEvents] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch data from Firestore & Sort by most recent
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const eventsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();

          // ✅ Validate date format
          let formattedDate = new Date(0); // Default: Oldest possible date
          const dateParts = data.date?.match(/(\w+), (\w+) (\d+), (\d+)/);

          if (dateParts) {
            formattedDate = new Date(`${dateParts[2]} ${dateParts[3]}, ${dateParts[4]}`);
          } else {
            console.warn(`Invalid date format for event: ${data.title}`);
          }

          return { id: doc.id, ...data, formattedDate };
        });

        // ✅ Sort by most recent date
        const sortedEvents = eventsData.sort((a, b) => b.formattedDate - a.formattedDate);

        setEvents(sortedEvents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // ✅ Responsive items per page
  const [itemsPerPage, setItemsPerPage] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Handle Pagination
  const handleNext = () => {
    if (startIndex + itemsPerPage < events.length) {
      setDirection(1);
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setDirection(-1);
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#27B7B4] to-[#125655] py-16 px-6 sm:px-10 lg:px-20 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Our Events</h2>

        {loading ? (
          <p className="text-white">Loading events...</p>
        ) : (
          <>
            {/* Events Grid with Smooth Animation */}
            <div className="overflow w-full flex justify-center relative">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={startIndex}
                  className="flex space-x-4"
                  initial={{ x: direction * 100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -direction * 100 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {events.slice(startIndex, startIndex + itemsPerPage).map((event) => (
                    <Event key={event.id} {...event} />
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
              disabled={startIndex + itemsPerPage >= events.length}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 border-2 border-white opacity-60 text-white p-2 rounded-full shadow-lg disabled:opacity-20 bg-transparent enabled:hover:bg-white enabled:hover:text-black transition"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default SuccessEvents;
