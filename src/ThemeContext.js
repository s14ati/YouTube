// import { createContext, useState, useEffect } from "react";

// export const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//     const [isDark, setIsDark] = useState(() => {
//         const savedTheme = localStorage.getItem("theme");
//         return savedTheme === "dark" ? true : false;
//     });

//     useEffect(() => {
//         localStorage.setItem("theme", isDark ? "dark" : "light");
//     }, [isDark]);

//     const toggleTheme = () => setIsDark(!isDark);

//     return (
//         <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// }
