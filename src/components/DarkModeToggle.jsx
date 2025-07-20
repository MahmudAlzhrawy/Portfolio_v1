"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from 'lucide-react'
export default function DarkModeToggle(){
    const[isDark,setDark]=useState(false)
    useEffect(()=>{
        const savedMode = localStorage.getItem("theme");
        if(savedMode === "dark"){
            document.documentElement.classList.add("dark");
            setDark(true);
        }
    },[])

    const toggleDarkMode = () => {
        const newMode = !isDark;
        setDark(newMode);
        if(newMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }

    return (
        <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white shadow-md hover:scale-105 transition"
        >
            {isDark ? (
        <>
        <Sun size={20} />
        
        </>
        ) : (
        <>
            <Moon size={20} />
        
        </>
        )}
    </button>
)
}