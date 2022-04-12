import { createContext, useState, useEffect } from 'react';
import { Appearance} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const darkModeContext = createContext();

   
const DarkMode = (props) => {
    const colorScheme = Appearance.getColorScheme();
    const [isDarkMode, setIsDarkMode] = useState();
    useEffect(() => {
        if (colorScheme === 'dark') {
          setIsDarkMode(true)
        }
       }, []);
  
   
    return (
        
        <darkModeContext.Provider value={[isDarkMode, setIsDarkMode]}>
            {props.children}
        </darkModeContext.Provider>
    );
};

export default DarkMode;