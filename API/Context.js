import { createContext, useState } from 'react';

//create a context, with createContext api
export const darkModeContext = createContext();

const DarkMode = (props) => {
        // this state will be shared with all components 
    const [isDarkMode, setIsDarkMode] = useState();

    return (
                // this is the provider providing state
        <darkModeContext.Provider value={[isDarkMode, setIsDarkMode]}>
            {props.children}
        </darkModeContext.Provider>
    );
};

export default DarkMode;