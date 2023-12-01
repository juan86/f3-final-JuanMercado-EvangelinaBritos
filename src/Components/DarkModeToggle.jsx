import React, { useContext, useEffect, useState } from 'react';
import { ContextGlobal } from './utils/global.context';

export const DarkModeToggle = () => {
    const { state, dispatch } = useContext( ContextGlobal );
    const [isDarkMode, setIsDarkMode] = useState( state.darkMode );
    
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
      
        if (isDarkMode) {
              document.body.classList.add('dark-mode');
        } else {
              document.body.classList.remove('dark-mode');
        }
          
        dispatch({ type: 'SET_THEME', payload: isDarkMode });
      
    }, [isDarkMode]);

    return (
        <div className="dark-mode-toggle">
            <label className="switch" htmlFor="darkModeToggle">
              <input
                type="checkbox"
                id="darkModeToggle"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <span className="slider round"></span>
            </label>
        </div>
    )
}

