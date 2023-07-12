import Image from 'next/image'
import { Inter } from 'next/font/google'
import {DateRangePicker } from 'react-date-range';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
    faMagnifyingGlass,
    faGlobe,
    faBars,
    faUser,
    faUserGroup,
  } from "@fortawesome/free-solid-svg-icons";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
      const [state, setState] = useState({
    selection1: {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection1'
    },
  });
const [clicksearchbar, setclicksearchbar] = useState("");
  return (
    <main>
    <div class="max-w-full sticky  z-100 grid grid-cols-3 bg-white p-5 drop-shadow-lg">
        <div class="flex justify-start items-center mx-0 px-2">
           <div className="bnbimage  bg-cover h-12 w-40 py-3 rounded-lg "></div>
            
        </div>
        <div class="flex items-center rounded-full bg-white hover:drop-shadow-lg border-2 border-gray-200 m-1 p-2">
            <input type="text" placeholder="    Start your search" onChange={(e)=>{setclicksearchbar(e.target.value)}} class="flex-grow text-gray-500 focus:outline-none">
                
            </input>
            <FontAwesomeIcon className="text-lg px-2.5 py-2 h-8 text-white" icon={faMagnifyingGlass} />
        </div>
        <div class="flex justify-end items-center mx-1 p-2">

            <div class="flex items-center rounded-full decoration-gray-500 hover:bg-gray-200 hover:cursor-pointer py-3 px-3 mx-2">
                Become a Host
            </div>

            <div class="flex items-center rounded-full hover:bg-gray-200 hover:cursor-pointer py-2 px-3 mx-3 border-2 border-gray-200">
                <FontAwesomeIcon class=" text-lg text-gray-700" icon={faGlobe}></FontAwesomeIcon>
            </div>
            
            <div
                className="flex items-center rounded-full bg-white hover:drop-shadow-lg hover:cursor-pointer border-2 border-gray-200">
                <FontAwesomeIcon  icon={faBars} className="my-2 mx-3 text-lg text-gray-700"/>
                <FontAwesomeIcon  icon={faUser} className="my-2 mx-3 text-lg text-gray-700"/>
            </div>
        </div>
        <div className="mx-auto col-span-3">
        <div className="flex flex-row mx-auto  col-span-3 items-center justify-center">
            
</div>

     {clicksearchbar!=""?
      <div>
      <div className="flex">
                <div className='flex flex-col'>
                  <div> <DateRangePicker className = "sm:w-full  w-28" color="red"  onChange={item => setState({ ...state, ...item })} moveRangeOnFirstSelection={true}  ranges={[state.selection1]} value = {state} rangeColors={['#f33e5b', '#3ecf8e', '#fed14c']} minDate={new Date()}/></div>
                </div>
             </div>

        <div className=" grid grid-cols-2 mt-4 mmx-2 border-b-2 ">
          <div class="text-2xl font-normal justify-items-start">Number of Guests</div>
          <div class="flex items items-center justify-end">
          <FontAwesomeIcon className="text-lg px-2.5 py-2 h-8 text-black" icon={faUserGroup} />
          <input type="number" class="w-12 h-8 border-none outline-none right-40  text-red-500 value=1"></input>
        </div>
  </div>
  <div class="grid grid-cols-2 mt-4 border-b-2 mx-2   ">
        <button onClick={()=>{setclicksearchbar("")}}
        class="text-gray-400">cancel</button>
        <button class="text-red-400">search</button>
      </div>
      </div>:""}

     

      </div>
    </div>

    <div class="relative flex flex-col justify-center items-center overflow-hidden bg-cover bg-no-repeat image h-[600px]" >
        <div class=" text-black text-xl font-bold">Not sure where to go? Perfect.</div>
        <div class="m-5">
            <button class="rounded-full px-10 py-4 hover:drop-shadow-2xl text-base text-purple-500 font-semibold bg-white drop-shadow-md">I'm flexible</button>
        </div>
    </div>

    <div class = "my-10  text-4xl font-semibold mx-20">Explore Nearby</div>
       
    <div class="grid grid-cols-1 mx-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="p-2 flex hover:scale-105 transition duration-200 my-2">
                <div className="flex items-center  hover:bg-gray-100 hover:cursor-pointer rounded-e-lg">
                    <div className="firstimage z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex flex-col justify-center pe-16 -ms-5 ps-10 ">
                        <div>
                            London
                        </div>
                        <div>
                            45-minutes drive
                        </div>
                    </div>
                </div>
            </div>
        
                
                <div className="flex items-center  hover:bg-gray-100 hover:cursor-pointer rounded-e-lg">
                    <div className="secimage z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex flex-col justify-center pe-16 -ms-5 ps-10 ">
                        <div>
                            Manchester
                        </div>
                        <div>
                            4.5-hour drive
                        </div>
                    </div>
                </div>
          

                <div className="flex items-center  hover:bg-gray-100 hover:cursor-pointer rounded-e-lg">
                    <div className="thirdimage z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex flex-col justify-center pe-16 -ms-5 ps-10 ">
                        <div>
                            Liverpool
                        </div>
                        <div>
                            4.5-hour drive
                        </div>
                    </div>
                </div>
            

                <div className="flex items-center  hover:bg-gray-100 hover:cursor-pointer rounded-e-lg">
                    <div className="fourthimage z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex flex-col justify-center pe-16 -ms-5 ps-10 ">
                        <div>
                            York
                        </div>
                        <div>
                            4.5-hour drive
                        </div>
                    </div>
                </div>
              </div>
      


    <div class="grid grid-cols-1 mx-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="p-2 flex hover:scale-105 transition duration-200 my-2">
                <div className="flex items-center  hover:bg-gray-100 hover:cursor-pointer rounded-e-lg">
                    <div className="fifthimage z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex flex-col justify-center pe-16 -ms-5 ps-10 ">
                        <div>
                            Cardiff
                        </div>
                        <div>
                            45-minutes drive
                        </div>
                    </div>
                </div>
            </div>
        
                <div className="flex items-center  hover:bg-gray-100 hover:cursor-pointer rounded-e-lg">
                    <div className="sixthimage z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex flex-col justify-center pe-16 -ms-5 ps-10 ">
                        <div>
                            Birkenhead
                        </div>
                        <div>
                            4.5-hour drive
                        </div>
                    </div>
                </div>
          

                <div className="flex items-center  hover:bg-gray-100 hover:cursor-pointer rounded-e-lg">
                    <div className="seventhimage z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex flex-col justify-center pe-16 -ms-5 ps-10 ">
                        <div>
                            Newquay
                        </div>
                        <div>
                            6-hour drive
                        </div>
                    </div>
                </div>
            

                <div className="flex items-center  hover:bg-gray-100 hover:cursor-pointer rounded-e-lg">
                    <div className="eigthimage z-10 bg-cover h-16 w-16 rounded-lg "></div>
                    <div className="flex flex-col justify-center pe-16 -ms-5 ps-10 ">
                        <div>
                            Hove
                        </div>
                        <div>
                            2-hour drive
                        </div>
                    </div>
                </div>
              </div>
      
      
      
              <div class="my-10 text-4xl font-semibold mx-20">Live Anywhere</div>
              <div className="flex p-2 mx-20 flex-nowrap overflow-x-auto scrollbar-hide hover:cursor-pointer">
            <div className="relative h-25 w-25 p-2 hover:scale-105 transition duration-200">
                <div className="liveone w-80 h-80 rounded-2xl bg-cover"></div>
                <div className="text-2xl py-2">Outdoor getaways</div>
            </div>

            <div className="relative h-25 w-25 p-2 hover:scale-105 transition duration-200">
                <div className="livetwo w-80 h-80 rounded-2xl bg-cover"></div>
                <div className="text-2xl py-2">Outdoor getaways</div>
            </div>

            <div className="relative h-25 w-25 p-2 hover:scale-105 transition duration-200">
                <div className="livethree w-80 h-80 rounded-2xl bg-cover"></div>
                <div className="text-2xl py-2">Outdoor getaways</div>
            </div>

            <div className="relative h-25 w-25 p-2 hover:scale-105 transition duration-200">
                <div className="livefour w-80 h-80 rounded-2xl bg-cover"></div>
                <div className="text-2xl py-2">Outdoor getaways</div>
            </div>
            </div>
              
<div class="outdoorimage z-10 bg-cover mx-20 mt-10 h-96 w-200 rounded-lg relative">
  <h3 class=" font-normal mx-10 mt-20 absolute top-2 left-3 text-3xl">The Greatest <br></br> Outdoor</h3>
  <div class=" my-24  mx-10 absolute top-20">wishlist created by abdullah</div>
  <button class="rounded-xl absolute bottom-10 text-white bg-black left-16 h-12 w-32 mx-10 my-44 top-10 transform -translate-x-1/2">Get Inspiration</button>
</div>






    <div class=" drop-shadow-lg bg-slate-100">
        <div class="flex mx-28 space-x-24 justify-center sticky grid-cols-4">
            <div class="my-24 leading-8">
                <h1 class ="font-bold">Support</h1>
                <ul class = "flex-col">
                    <li>Help Center</li>
                    <li>Safety information</li>
                    <li>Cancellation options</li>
                    <li>Our COVID-19 Response</li>
                    <li>Supporting people with disabilities</li>
                </ul>
        
            </div>
            <div class="my-24 leading-8">
                <h1 class ="font-bold">Hosting</h1>
                <ul class = "flex-col">
                    <li>Try hosting</li>
                    <li>AirCover: protection for Hosts</li>
                    <li>Explore hosting resources</li>
                    <li>Visit our community forum</li>
                    <li>How to host responsibly</li>
                </ul>
            </div>
            <div class="my-24 leading-8">
                <h1 class ="font-bold">Community</h1>
                <ul class = "flex-col">
                    <li>Airbnb.org: disaster relief housing</li>
                    <li>Support Afghan refugees</li>
                    <li>Celebrating diversity & belonging</li>
                    <li>Combating discrimination</li>
                </ul>
            </div>
            <div class="my-24 leading-8">
                <h1 class ="font-bold">ABOUT</h1>
                <ul class = "flex-col">
                    <li>How Airbnb works</li>
                    <li>Newsroom</li>
                    <li>Investors</li>
                    <li>Airbnb Plus</li>
                    <li>Airbnb Luxe</li>
                </ul>
            </div>
        </div>
        </div>
    
      
    </main>
  )
}
