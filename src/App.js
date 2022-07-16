import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import MVPOne from './components/MVPOne';
import Storefront from './components/Storefront/Storefront/Storefront';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
                <div>
                    <Routes>
                        <Route path='/' element={<MVPOne />} />
                        <Route path='/storefront' element={<Storefront />} />
                        {/* <Route render={() => <RouteNotFound />} /> Catch all route for invalid URL paths, has a link to the home route. */}
                        {/* <Route path='/' render={() => <UnderConstruction />} /> */}
                    </Routes>
                </div>
            </BrowserRouter>
    </div>
  );
}

export default App;
