'use client';

import React, { useEffect, useState } from "react";

export default function Header() {
    const [ isDark, setIsDark ] = useState(false);
    const isDarkActive = document?.body.classList.contains('dark');
    const setDark = () => document?.body.classList.add('dark');

    useEffect(() => {
        setIsDark(localStorage.getItem('darkMode') === 'true');

        if (isDark && !isDarkActive) {
            setDark();
            return;
        }
        
    });

    return (
        <>
            <header className="flex justify-center items-center h-16 px-8 bg-white shadow shadow-very-dark-blue/50 dark:bg-blue dark:text-white">
                <div className="flex items-center justify-between max-w-[1366px] w-full">
                    <h1 className="font-bold">Where in the world?</h1>

                    <div className="flex items-center cursor-pointer" onClick={() => {
                        const isDark = document.body.classList.toggle('dark');

                        setIsDark(isDark);

                        localStorage.setItem('darkMode', isDark ? 'true' : 'false');                        
                        }}>
                        <div className="c-header__icon w-6 h-6 mr-2">
                            <img src={isDark ? '/assets/sun.svg' : '/assets/moon.svg'} alt="icon for toggling dark mode" /> 
                        </div>
                        <span className="font-semi-bold text-sm">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                    </div>
                </div>
            </header>
        </>
    )
}
