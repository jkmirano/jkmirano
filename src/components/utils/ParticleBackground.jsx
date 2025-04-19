import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log("success");
  }, []);

  const particleOptions = {
    background: {
      color: "transparent",
    },
    fpsLimit: 93,
    interactivity: {
      detectOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "grab",
          parallax: {
            enable: true,
            force: 60,
            smooth: 10,
          },
          // background: {
          //   color: "##FFFF00"
          // },
          boundary: {
            width: 30,
            height: 30,
          },
          opacity: {
            value: 0.3,
          },
          particles: {
            color: {
              value: "#0000FF",
            },
          },
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 300,
          duration: 1,
        },
        repulse: {
          distance: 90,
          duration: 0.7,
        },
      },

      pauseOnBlur: true,
      retinaDetect: true,
    },
    particles: {
      color: "#0000FF",
      polygon: {
        nb_sides: 6,
      },
      links: {
        color: "#FFFFFF",
        distance: 300,
        enable: true,
        opacity: 0.5,
        width: 1.5,
      },
      collisions: {
        enable: true,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          //default: "bounce"
        },
        random: false,
        speed: 1.2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 20,
      },
      opacity: {
        value: 0,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.22, max: 0.22 },
      },
    },
    detectRetina: true,
    //pauseOnBlur: true
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
    />
  );
};

export default ParticleBackground;
