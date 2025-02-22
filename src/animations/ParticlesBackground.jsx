import React, { useEffect } from "react";

const ParticlesBackground = ({ id = "particles-container" }) => {
  useEffect(() => {
    console.log(`✅ Initializing Particles: ${id}`);

    // Ensure old particles with the same ID are destroyed before creating a new one
    if (window.pJSDom) {
      const existingParticles = window.pJSDom.find((p) => p.pJS.canvas.el.id === id);
      if (existingParticles) {
        console.log(`🛑 Destroying Existing Particles: ${id}`);
        existingParticles.pJS.fn.vendors.destroypJS();
        window.pJSDom = window.pJSDom.filter((p) => p.pJS.canvas.el.id !== id);
      }
    }

    // Initialize particles.js with a unique ID
    window.particlesJS(id, {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#55ebb3" },
        shape: { type: "circle" },
        opacity: { value: 1, random: true },
        size: { value: 6, random: true },
        line_linked: { enable: true, distance: 120, color: "#75fdcb", opacity: 0.8, width: 1 },
        move: { enable: true, speed: 1, direction: "none", random: false, straight: false, out_mode: "out" },
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } },
        modes: { grab: { distance: 120, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } },
      },
      retina_detect: true,
    });

    return () => {
      console.log(`🛑 Cleaning Up Particles: ${id}`);
      const existingParticles = window.pJSDom.find((p) => p.pJS.canvas.el.id === id);
      if (existingParticles) {
        existingParticles.pJS.fn.vendors.destroypJS();
        window.pJSDom = window.pJSDom.filter((p) => p.pJS.canvas.el.id !== id);
      }
    };
  }, [id]);

  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <div id={id} className="absolute inset-0 w-full h-full"></div>
    </div>
  );
};

export default ParticlesBackground;
