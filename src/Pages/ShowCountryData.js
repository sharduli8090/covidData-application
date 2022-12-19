import React, {useState} from "react";
import {
    BarChart,
    Tooltip,
    Legend,
    XAxis,
    YAxis,
    CartesianGrid,
    Bar,
    AreaChart,
    Area
} from 'recharts';
import '../assets/styles/ShowCountryStateData.css';

function ShowCountryData() {

    const [country, setCountry] = useState("");
    const onChangedValue = (e) => {
        setCountry(capitalize(e.target.value))
    }
    const [Total, setTotal] = useState([]);
    const [countryRegionWise, setcountryRegionWise] = useState([]);

    const totalData = (country) => { // All Country
        if (country !== "") {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '060a0e62b3msh3b4dceebd52177fp1e5142jsn9222f9a719e6',
                    'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
                }
            };

            fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=' + country, options).then(response => response.json()).then(response => {
                // console.log(response)
                setTotal(response.data)
            }).catch(err => console.error(err));

            setCountry("")


            const options1 = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '060a0e62b3msh3b4dceebd52177fp1e5142jsn9222f9a719e6',
                    'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
                }
            };
            fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=' + country, options1).then(response => response.json()).then(response => {
                // console.log(response)
                // console.log(response.data.covid19Stats);
                setcountryRegionWise(response.data.covid19Stats)
            }).catch(err => console.error(err));


        } else {
            alert("Please Enter Country Name")
        }
    }
    const capitalize = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }


    let graph = [{
            location: Total.location,
            confirmed: Total.confirmed,
            deaths: Total.deaths
        }]


    return (
        <>

            <div className="main-box">
                <div className="input-box">

                    <input type='text'
                        onChange={onChangedValue}
                        value={country}
                        placeholder="Enter Country Name To View Graph"/>
                    <button onClick={
                        () => totalData(capitalize(country))
                    }>Show</button>
                    {
                    console.log(Total.location + " Total.location")
                } </div>

                <div className="chart-box">

                    <BarChart width={730}
                        height={250}
                        data={graph}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="location"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="confirmed" fill="#A7BBC3"/>
                        <Bar dataKey="deaths" fill="#FE667B"/>
                    </BarChart>
                    <AreaChart width={1200}
                        height={250}
                        data={countryRegionWise}
                        margin={
                            {
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0
                            }
                    }>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#A7BBC3"
                                    stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8"
                                    stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="province"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Area type="monotone" dataKey="confirmed" stroke="#A7BBC3"
                            fillOpacity={1}
                            fill="url(#color)"/>
                        <Area type="monotone" dataKey="deaths" stroke="#FE667B"
                            fillOpacity={1}
                            fill="#FE667B"/>
                    </AreaChart>

                </div>
                <div className="info-container">
                    <div className="info-o info info-location">
                        Location : {
                        Total.location
                    } </div>
                    <div className="info-e info info-lastChecked">
                        Last Checked : {
                        Total.lastChecked
                    } </div>
                    <div className="info-o info info-lastReported">
                        Last Reported : {
                        Total.lastReported
                    } </div>
                </div>
            </div>
        </>
    );
}


export default ShowCountryData;
