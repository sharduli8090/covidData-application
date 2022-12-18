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
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         Total: [],
    //         RegionWise: []
    //     }
    // }
    // componentDidMount() { 
    //     // All Country
        

    // }


    render() {

        return (
            <> 
            <Router>
<Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="country" element={<ShowCountryData />}/>
          <Route path="state" element={<ShowStateData />} />
          <Route path="table" element={<ShowTable />} />
    </Routes><br/>
    <Footer/>
  </Router>




{/* 
                <BarChart width={730}
                    height={250}
                    data={this.state.Total}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="location"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="confirmed" fill="#8884d8"/>
                    <Bar dataKey="deaths" fill="#82ca9d"/>
                </BarChart>


                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
  



<LineChart
          width={1000}
          height={300}
          data={this.state.RegionWise[0]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="province" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="confirmed" stroke="#8884d8" />
          <Line type="monotone" dataKey="deaths" stroke="#82ca9d" />
        </LineChart>

                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <hr/> */}
{/* <ShowTotalCountryData/> */}

            </>
        );
    }
}

export default App;
