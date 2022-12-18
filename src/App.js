import React, {Component} from 'react';
import {
    BarChart,
    Tooltip,
    Legend,
    XAxis,
    YAxis,
    CartesianGrid,
    Bar,
    LabelList,
    LineChart,
    Line
} from 'recharts';
import ShowCountryData from './Pages/ShowCountryData';
import Home from './Pages/Home';
import ShowStateData from './Pages/ShowStateData';
import ShowTable from './Pages/ShowTable';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

class App extends Component {

    render() {

        return (
            <>
                <Router>
                    <Header/>
                    <Routes>
                        <Route path="/"
                            element={<Home/>}/>
                        <Route path="country"
                            element={<ShowCountryData/>}/>
                        <Route path="state"
                            element={<ShowStateData/>}/>
                        <Route path="table"
                            element={<ShowTable/>}/>
                    </Routes><br/>
                    <Footer/>
                </Router>


</>
        );
    }
}

export default App;
