import React from 'react';
import { TourList } from "./components/TourList/TourList";
import {Navbar} from './components/Navbar/Navbar';
import './App.scss';
function App() {
    return (
        <div>
            <Navbar/>
            <TourList />
        </div>
    );
}

export default App;
