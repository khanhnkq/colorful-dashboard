import React from 'react';
import {
  Home,
  Book,
  MessageSquare,
  LayoutGrid,
  Settings,
  Bell,
  Monitor,
  PlaySquare,
  Briefcase,
  Box,
  Star,
  ChevronRight,
  ChevronDown,
  Flame
} from 'lucide-react';

export default function App() {
  return (
    <div className="h-screen w-full bg-[#FCF9F4] flex overflow-hidden font-sans">
      {/* Left Sidebar */}
      <nav className="w-24 bg-[#F5EBE1] flex flex-col items-center py-8 justify-between shrink-0">
            <div className="flex flex-col items-center gap-8">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white mb-4">
                <Flame className="w-6 h-6" />
              </div>
              
              <div className="flex flex-col gap-6">
                <button className="w-12 h-12 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-white hover:shadow-sm transition-all relative">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-pink-400 rounded-full border-2 border-[#F5EBE1]"></div>
                  <Book className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center shadow-md">
                  <Home className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-white hover:shadow-sm transition-all">
                  <MessageSquare className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-white hover:shadow-sm transition-all">
                  <Book className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-white hover:shadow-sm transition-all">
                  <LayoutGrid className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-6 items-center">
              <button className="w-12 h-12 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-white hover:shadow-sm transition-all">
                <Settings className="w-5 h-5" />
              </button>
              <img 
                src="https://picsum.photos/seed/user1/100/100" 
                alt="User" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 p-10 overflow-y-auto">
            <h1 className="text-[3.5rem] font-medium text-gray-900 mb-8 max-w-md leading-[1.1] tracking-tight">
              Invest in your education
            </h1>

            {/* Categories */}
            <div className="flex gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide">
              <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-2xl shrink-0">
                <LayoutGrid className="w-5 h-5" />
                <span className="font-medium text-sm">All</span>
              </button>
              <button className="flex items-center gap-2 bg-white text-gray-600 px-5 py-3 rounded-2xl shadow-sm shrink-0 hover:bg-gray-50 transition-colors">
                <Monitor className="w-5 h-5" />
                <span className="font-medium text-sm">IT & Software</span>
              </button>
              <button className="flex items-center gap-2 bg-white text-gray-600 px-5 py-3 rounded-2xl shadow-sm shrink-0 hover:bg-gray-50 transition-colors">
                <PlaySquare className="w-5 h-5" />
                <span className="font-medium text-sm">Media Training</span>
              </button>
              <button className="flex items-center gap-2 bg-white text-gray-600 px-5 py-3 rounded-2xl shadow-sm shrink-0 hover:bg-gray-50 transition-colors">
                <Briefcase className="w-5 h-5" />
                <span className="font-medium text-sm">Business</span>
              </button>
              <button className="flex items-center gap-2 bg-white text-gray-600 px-5 py-3 rounded-2xl shadow-sm shrink-0 hover:bg-gray-50 transition-colors">
                <Box className="w-5 h-5" />
                <span className="font-medium text-sm">Interior</span>
              </button>
            </div>

            {/* Most Popular */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-800 mb-6">Most popular</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Card 1 */}
                <div className="bg-[#F8C8D4] rounded-3xl p-6 flex flex-col justify-between min-h-[240px] relative overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <Monitor className="w-4 h-4 text-gray-700" />
                      <span className="text-xs font-medium text-gray-700">IT & Software</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm">
                      <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                      <span className="text-xs font-bold">4.8</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                      CCNA 2020 200-125 Video Boot Camp
                    </h3>
                    <div className="flex justify-between items-end">
                      <span className="text-sm text-gray-700 font-medium">9,530 students</span>
                      <div className="flex -space-x-2">
                        <img src="https://picsum.photos/seed/inst1/100/100" alt="Instructor" className="w-8 h-8 rounded-full border-2 border-[#F8C8D4]" referrerPolicy="no-referrer" />
                        <img src="https://picsum.photos/seed/inst2/100/100" alt="Instructor" className="w-8 h-8 rounded-full border-2 border-[#F8C8D4]" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#FDE0C5] rounded-3xl p-6 flex flex-col justify-between min-h-[240px] relative overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <Briefcase className="w-4 h-4 text-gray-700" />
                      <span className="text-xs font-medium text-gray-700">Business</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm">
                      <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                      <span className="text-xs font-bold">4.9</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                      Powerful Business Writing: How to Write Concisely
                    </h3>
                    <div className="flex justify-between items-end">
                      <span className="text-sm text-gray-700 font-medium">1,463 students</span>
                      <div className="flex -space-x-2">
                        <img src="https://picsum.photos/seed/inst3/100/100" alt="Instructor" className="w-8 h-8 rounded-full border-2 border-[#FDE0C5]" referrerPolicy="no-referrer" />
                        <img src="https://picsum.photos/seed/inst4/100/100" alt="Instructor" className="w-8 h-8 rounded-full border-2 border-[#FDE0C5]" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#DCD3FF] rounded-3xl p-6 flex flex-col justify-between min-h-[240px] relative overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <PlaySquare className="w-4 h-4 text-gray-700" />
                      <span className="text-xs font-medium text-gray-700">Media Training</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm">
                      <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                      <span className="text-xs font-bold">4.9</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                      Certified Six Sigma Yellow Belt Training
                    </h3>
                    <div className="flex justify-between items-end">
                      <span className="text-sm text-gray-700 font-medium">6,726 students</span>
                      <div className="flex -space-x-2">
                        <img src="https://picsum.photos/seed/inst5/100/100" alt="Instructor" className="w-8 h-8 rounded-full border-2 border-[#DCD3FF]" referrerPolicy="no-referrer" />
                        <img src="https://picsum.photos/seed/inst6/100/100" alt="Instructor" className="w-8 h-8 rounded-full border-2 border-[#DCD3FF]" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-[#C4F0D5] rounded-3xl p-6 flex flex-col justify-between min-h-[240px] relative overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <Box className="w-4 h-4 text-gray-700" />
                      <span className="text-xs font-medium text-gray-700">Interior</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm">
                        <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                        <span className="text-xs font-bold">5.0</span>
                      </div>
                      <div className="bg-white px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <span className="text-xs font-bold text-orange-500">👍 Top 10</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                      How to Design a Room in 10 Easy Steps
                    </h3>
                    <div className="flex justify-between items-end">
                      <span className="text-sm text-gray-700 font-medium">8,735 students</span>
                      <div className="flex -space-x-2">
                        <img src="https://picsum.photos/seed/inst7/100/100" alt="Instructor" className="w-8 h-8 rounded-full border-2 border-[#C4F0D5]" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Featured Course */}
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-6 text-gray-400">Featured course</h2>
            </div>

          </main>

          {/* Right Sidebar */}
          <aside className="w-80 bg-[#FCF9F4] p-8 border-l border-gray-200/60 overflow-y-auto shrink-0 flex flex-col gap-8">
            
            {/* Top Actions */}
            <div className="flex justify-between items-center">
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-600 hover:bg-gray-50">
                <Bell className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-600 hover:bg-gray-50">
                <Settings className="w-5 h-5" />
              </button>
            </div>

            {/* Profile */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-400 to-pink-300 p-1 mb-4">
                <img 
                  src="https://picsum.photos/seed/annette/200/200" 
                  alt="Annette Black" 
                  className="w-full h-full rounded-full border-4 border-[#FCF9F4] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Annette Black</h2>
              
              <div className="w-full bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-sm text-gray-800">274 Friends</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img src="https://picsum.photos/seed/f1/100/100" alt="Friend" className="w-6 h-6 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                    <img src="https://picsum.photos/seed/f2/100/100" alt="Friend" className="w-6 h-6 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                    <img src="https://picsum.photos/seed/f3/100/100" alt="Friend" className="w-6 h-6 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Activity Chart */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-medium text-gray-800">Activity</h3>
                <button className="flex items-center gap-1 text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-lg">
                  Year <ChevronDown className="w-3 h-3" />
                </button>
              </div>
              
              <div className="flex items-end gap-2 mb-6">
                <span className="text-3xl font-semibold text-gray-900">3.5h</span>
                <div className="bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded-md mb-1 flex items-center gap-1">
                  <span>👍</span> Great result!
                </div>
              </div>

              {/* Fake Chart */}
              <div className="flex items-end justify-between h-32 gap-1.5">
                {/* Jan */}
                <div className="w-full flex flex-col items-center gap-2">
                  <div className="w-full bg-blue-100 rounded-t-full h-8"></div>
                  <span className="text-[10px] text-gray-400 font-medium">Jan</span>
                </div>
                {/* Feb */}
                <div className="w-full flex flex-col items-center gap-2">
                  <div className="w-full bg-orange-100 rounded-t-full h-12"></div>
                  <span className="text-[10px] text-gray-400 font-medium">Jan</span>
                </div>
                {/* Aug */}
                <div className="w-full flex flex-col items-center gap-2">
                  <div className="w-full bg-green-100 rounded-t-full h-16"></div>
                  <span className="text-[10px] text-gray-400 font-medium">Aug</span>
                </div>
                {/* Sep */}
                <div className="w-full flex flex-col items-center gap-2">
                  <div className="w-full bg-pink-100 rounded-t-full h-20"></div>
                  <span className="text-[10px] text-gray-400 font-medium">Sep</span>
                </div>
                {/* Oct */}
                <div className="w-full flex flex-col items-center gap-2">
                  <div className="w-full bg-purple-100 rounded-t-full h-10"></div>
                  <span className="text-[10px] text-gray-400 font-medium">Oct</span>
                </div>
                {/* Nov */}
                <div className="w-full flex flex-col items-center gap-2">
                  <div className="w-full bg-blue-100 rounded-t-full h-14"></div>
                  <span className="text-[10px] text-gray-400 font-medium">Nov</span>
                </div>
                {/* Dec - Active */}
                <div className="w-full flex flex-col items-center gap-2">
                  <div className="w-full h-24 rounded-full border-2 border-black p-0.5 flex flex-col justify-end overflow-hidden">
                     <div className="w-full h-1/4 bg-purple-300 rounded-t-full"></div>
                     <div className="w-full h-1/4 bg-blue-300"></div>
                     <div className="w-full h-1/4 bg-green-300"></div>
                     <div className="w-full h-1/4 bg-orange-300 rounded-b-full"></div>
                  </div>
                  <span className="text-[10px] text-white bg-black px-2 py-0.5 rounded-full font-medium">Dec</span>
                </div>
              </div>
            </div>

            {/* My Courses */}
            <div>
              <h3 className="font-medium text-gray-800 mb-4">My courses</h3>
              <div className="flex flex-col gap-4">
                
                {/* Course 1 */}
                <div className="bg-[#F8C8D4] rounded-3xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-10 -mt-10"></div>
                  <div className="flex justify-between items-start relative z-10">
                    <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <Monitor className="w-4 h-4 text-gray-700" />
                      <span className="text-xs font-medium text-gray-700">IT & Software</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm">
                      <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                      <span className="text-xs font-bold">4.8</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 relative z-10">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
                      Flutter Masterclass (Dart, APIs, Firebase & More)
                    </h4>
                    <div className="flex justify-between items-end">
                      <span className="text-xs text-gray-700 font-medium">9,530 students</span>
                      <div className="flex -space-x-2">
                        <img src="https://picsum.photos/seed/inst8/100/100" alt="Instructor" className="w-6 h-6 rounded-full border-2 border-[#F8C8D4]" referrerPolicy="no-referrer" />
                        <img src="https://picsum.photos/seed/inst9/100/100" alt="Instructor" className="w-6 h-6 rounded-full border-2 border-[#F8C8D4]" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course 2 (Partial) */}
                <div className="bg-[#FDE0C5] rounded-3xl p-5 relative overflow-hidden h-24">
                  <div className="flex justify-between items-start relative z-10">
                    <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <Briefcase className="w-4 h-4 text-gray-700" />
                      <span className="text-xs font-medium text-gray-700">Business</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-sm">
                      <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                      <span className="text-xs font-bold">4.9</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </aside>
    </div>
  );
}
