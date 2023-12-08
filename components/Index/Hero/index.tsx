// import { FC } from 'react'

// export const Hero: FC = () => {
//   return (
//     <section
//       className="mx-auto"
//       id="home"
//       style={{ backgroundColor: '#d9c339' }}
//     >
//       <div className="inline-block w-full h-full">
//         <div className="w-full min-h-screen -z-1 bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500">
//           <h1>hello world</h1>
//         </div>
//       </div>
//     </section>
//   )
// }
import React from "react";
import Carousel from "./carousel";
// import { FlockingBirdsBackground } from 'flocking-birds-background'

const Hero = () => {
  return (
    <section
      className="mx-auto "
      id="home"
      style={{
        // backgroundImage: 'url("/images/bg1.webp")',
        background: "linear-gradient(45deg, #fffae3, #ffd700)",
        backgroundSize: "cover"
      }}
      >
      {/* <FlockingBirdsBackground initialBirdCount={1}/> */}
        <div className="inline-block w-full h-full z-index-1">
          <div className="w-full min-h-screen -z-1 pt-8 leading-8">
            <Carousel />
          </div>
        </div>
    </section>
  );
};

export default Hero;
