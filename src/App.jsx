import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Contact, Detail, Favs } from './Routes';
import { NavBar, Footer, ContextProvider } from './Components';

export const App = () => {

  return (
    <ContextProvider>
        <NavBar />
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="contact" element={ <Contact /> }/>
            <Route path="favorite" element={ <Favs /> }/>
            <Route path="dentist/:id" element={ <Detail /> }/>
            <Route path="/*" element={ <Navigate to="/"/> }/>
        </Routes>
        <Footer/>
    </ContextProvider>
  )
}
