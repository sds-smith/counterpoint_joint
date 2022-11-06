import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Admin from './routes/admin/admin.component';
import './App.css';

function App() {
  return (
    <Routes >
      <Route path='/' element={ 
                                // <ResponsiveProvider>
                                  <Navigation />
                                // </ResponsiveProvider> 
                              }>
        <Route index element={ <Home /> } />
        <Route path='/admin' element={ <Admin /> } />
      </Route>
    </Routes>
  );
}

export default App;
