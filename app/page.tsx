"use client"

import FeatureGrid from "@/src/app/components/FeatureGrid";
import Header from "@/src/app/components/Header";
import HistoryPanel from "@/src/app/components/HistoryPanel";
import { useState } from "react";
import { HistoryItem, Tab } from "@/src/app/types";
export default  function Home() {
    const [active,setActive] = useState<Tab["id"]>("explain");
    const [history,setHistory] = useState<HistoryItem[]>([]);
    return (
     <>
     <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-10 opacity-20 ">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-500">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-500"></div>
                </div>
        </div>
      </div>
     </div>
     <main className="relative z-10 container mx-auto px-4 py-8">
      {/* HEADER */}
     <Header/>
     <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
      {/* Main content */}
      <div className="w-full lg:2/3">
      <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl ">
       {/*Tab Navigation*/}
       <div className="flex border-b border-gray-700/50 bg-gray-900/50 p-2">
        {tabs.map ((tab)=>{
          <button key={tab.id} onClick={()=>setActive(tab.id)}>
             <span className="text-xl mr-2">{tab.icon}</span>
             {tab.label}
             </button>
        })}
       </div>
       {/*Tab Content */}
       <div className="p-6">
        {activeTab === "explain" && < codeExplanation />}
       </div>
      </div>
      </div>  
       {/* Sidebar */}
       <HistoryPanel/>
     </div>
     {/* Features Grid */}
     <FeatureGrid/>
     </main>
     {/* Footer */}
     <footer className="relative z-10 text py-8 text-gray-400"></footer>
      <p>Power by Google Gemini AI. Built with Next.js & typescript</p>
     </>
   )
 }
 
