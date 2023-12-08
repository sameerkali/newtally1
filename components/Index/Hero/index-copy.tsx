// import React, { useCallback } from "react";
// import Particles, { IParticlesProps, IParticlesInitProps } from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import Carousel from "./carousel";


// const Hero: React.FC = () => {
//   const particlesInit: IParticlesInitProps = useCallback(async (engine) => {
//     console.log(engine);
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded: (container: unknown) => Promise<void> = useCallback(async (container) => {
//     await console.log(container);
//   }, []);

//   const particlesOptions: IParticlesProps = {
//     fullScreen: false,
//     background: {
//       // color: {
//       //   value: "#0d47a1",
//       // },
//     },
//     fpsLimit: 60,
//     interactivity: {
//       events: {
//         onClick: {
//           enable: true,
//           mode: "push",
//         },
//         onHover: {
//           enable: true,
//           mode: "repulse",
//           distance: 400,
//         },
//         resize: true,
//       },
//       modes: {
//         push: {
//           quantity: 4,
//         },
//         repulse: {
//           distance: 150,
//           duration: 0.4,
//         },
//       },
//     },
//     particles: {
//       color: {
//         value: "#ffffff",
//       },
//       links: {
//         color: "#ffffff",
//         distance: 120,
//         enable: true,
//         opacity: 0.6,
//         width: 1,
//       },
//       collisions: {
//         enable: true,
//       },
//       move: {
//         directions: "none",
//         enable: true,
//         outModes: {
//           default: "bounce",
//         },
//         random: false,
//         speed: 3,
//         straight: false,
//       },
//       number: {
//         density: {
//           enable: true,
//           area: 1200,
//         },
//         value: 80,
//       },
//       opacity: {
//         value: 0.5,
//       },
//       shape: {
//         type: "circle",
//       },
//       size: {
//         value: { min: 1, max: 2 },
//       },
//     },
//     detectRetina: true,
//   };

//   return (
//     <div className="w-full h-full">
//       <Particles
//         className="w-full h-screen"
//         id="tsparticles"
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={particlesOptions}
//       />
//       <div className="inline-block w-full h-full z-index-1">
//           <div className="w-full min-h-screen -z-1 pt-8 leading-8">
//             <Carousel />
//           </div>
//         </div>
//     </div>
//   );
// };

// export default Hero;
