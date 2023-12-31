import { FaFeather } from "react-icons/fa6";
import fitnessImg1 from '/projects/smart-fitness-tracker1.png';
import fitnessImg2 from '/projects/smart-fitness-tracker2.png';
import fitnessImg3 from '/projects/smart-fitness-tracker3.png';
import fitnessImg4 from '/projects/smart-fitness-tracker4.png';
import fitnessImg5 from '/projects/smart-fitness-tracker5.png';
import fitnessImg6 from '/projects/smart-fitness-tracker6.png';
import fitnessImg7 from '/projects/smart-fitness-tracker7.png';

const SmartFitnessTracker = () => {
   return (
      <div>
         <div className="relative flex flex-col md:flex-row bg-clip-border border-4 border-lime-400 rounded-xl bg-white text-gray-700 shadow-md w-full">
            <div className="relative w-full md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
               <div className="carousel w-full">
                  <div id="item1" className="carousel-item w-full">
                     <img src={fitnessImg1} className="w-full" />
                  </div>
                  <div id="item2" className="carousel-item w-full">
                     <img src={fitnessImg2} className="w-full" />
                  </div>
                  <div id="item3" className="carousel-item w-full">
                     <img src={fitnessImg3} className="w-full" />
                  </div>
                  <div id="item4" className="carousel-item w-full">
                     <img src={fitnessImg4} className="w-full" />
                  </div>
                  <div id="item5" className="carousel-item w-full">
                     <img src={fitnessImg5} className="w-full" />
                  </div>
                  <div id="item6" className="carousel-item w-full">
                     <img src={fitnessImg6} className="w-full" />
                  </div>
                  <div id="item7" className="carousel-item w-full">
                     <img src={fitnessImg7} className="w-full" />
                  </div>
               </div>
               <div className="flex justify-center w-full py-2 gap-2">
                  <a href="#item1" className="btn btn-xs">1</a>
                  <a href="#item2" className="btn btn-xs">2</a>
                  <a href="#item3" className="btn btn-xs">3</a>
                  <a href="#item4" className="btn btn-xs">4</a>
                  <a href="#item5" className="btn btn-xs">5</a>
                  <a href="#item6" className="btn btn-xs">6</a>
                  <a href="#item7" className="btn btn-xs">7</a>
               </div>

            </div>

            <div className="p-1 md:p-2 lg:p-6">
               <h6
                  className="block mb-4  antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                  Smart Fitness Tracker
               </h6>
               <h4 className="block mb-2  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Full Stack Website || Admin || Trainer || User
               </h4>
               <ul>
                  <li className="flex items-center gap-2 "><FaFeather className="text-lime-700" /> <p> SmartPulse tracker is a full-stack web application designed with responsive.</p></li>
                  <li className="flex items-center gap-2 "><FaFeather className="text-lime-700" /> <p> Users need to login via Google & Github (also can create a new Account).</p></li>
                  <li className="flex items-center gap-2 "><FaFeather className="text-lime-700" /> <p> Have an Admin, User dashboard, Admin dashboard, Trainer dashboard.</p></li>
                  <li className="flex items-center gap-2 "><FaFeather className="text-lime-700" />
                     <p> <span className="font-semibold">Technology:</span> React.js, Express.js, MongoDB, Firebase Authentication (Recaptcha), <br />
                        Transtack Query, React awesome components, Implement Payment Gateway, <br />
                        JWT Authorization with Token and more.....</p></li>
               </ul>
               <div className="flex gap-1 md:gap-4">
                  <a href="https://smart-palse-tracker.web.app" className="inline-block"><button
                     className="flex items-center gap-2 px-6 py-3 text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20">
                     Live Link<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        strokeWidth="2" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                     </svg></button></a>
                  <a href="https://github.com/Raisul-24/smart-pulse-tracker-client-side.git" className="inline-block"><button
                     className="px-6 py-3 text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20">
                     Client Side</button></a>
                  <a href="https://github.com/Raisul-24/smart-pulse-tracker-server-side" className="inline-block"><button
                     className="px-6 py-3 text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20">
                     Server Side</button></a>
               </div>
            </div>

         </div>
      </div>
   );
};

export default SmartFitnessTracker;