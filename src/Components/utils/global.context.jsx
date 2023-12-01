import { createContext, useEffect, useReducer } from "react";

export const ContextGlobal = createContext(undefined);

const initialState = () =>{
  return {
      darkMode: JSON.parse( localStorage.getItem('darkMode') ) || false,
      apiData: [],
      favorites:  JSON.parse( localStorage.getItem('favorites') ) || []
  };
}

// Define el reducer
const reducer = (state, action) => {
  switch (action.type) {
      case 'SET_THEME':
          return { ...state, darkMode: action.payload };
      
      case 'SET_API_DATA':
          return { ...state, apiData: action.payload };
      
      case 'TOGGLE_FAVORITE':
          return{ ...state, favorites:action.payload };
      
      default:
          return state;
  }
};

export const ContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, [], initialState);

    const getDentists = async() =>{
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch({ type: 'SET_API_DATA', payload: data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() =>{
        getDentists();
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }, [state.favorites]);
    
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
    }, [state.darkMode]);
    

    return (
        <ContextGlobal.Provider value={{ state, dispatch }}>
            { children }
        </ContextGlobal.Provider>
    )

  // return (
  //   <ContextGlobal.Provider value={{}}>
  //     {children}
  //   </ContextGlobal.Provider>
  // );
};
