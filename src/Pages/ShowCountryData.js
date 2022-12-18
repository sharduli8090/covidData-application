import { checkboxClasses } from "@mui/material";
import React, {useState, useEffect} from "react";
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

function ShowCountryData() {

    const [country, setCountry] = useState("");
    const onChangedValue = (e) => {
        setCountry(e.target.value)
    }
    const [Total, setTotal] = useState([]);
    const [countryRegionWise, setcountryRegionWise] = useState([]);

    const totalData = (country) => { 

        // All Country
        if (country !== "") {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '060a0e62b3msh3b4dceebd52177fp1e5142jsn9222f9a719e6',
                    'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
                }
            };

            fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=' + country, options).then(response => response.json()).then(response => {
                console.log(response)
                setTotal(response.data)
            }).catch(err => console.error(err));
            if (Total.location === "Global") {
                alert("You have entered a wrong country name")
            }
            setCountry("")


            const options1 = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '060a0e62b3msh3b4dceebd52177fp1e5142jsn9222f9a719e6',
                    'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
                }
            };
            fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=' + country, options1).then(response => response.json()).then(response => {
                console.log(response)
                console.log(response.data.covid19Stats);
                setcountryRegionWise(response.data.covid19Stats)
            }).catch(err => console.error(err));


        } else {
            alert("Please Enter Country Name")
        }
    }


    let graph = [{
            location: Total.location,
            confirmed: Total.confirmed,
            deaths: Total.deaths
        }]
    return (
        <>
            <input type='text'
                onChange={onChangedValue}
                value={country}/>
            <button onClick={
                () => totalData(country)
            }>Show</button>
            {
            console.log(Total.location + " Total.location")
        }
            

    


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
            <LineChart width={1500} height={250} data={countryRegionWise} margin={ { top: 5, right: 30, left: 20, bottom: 5 } }>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="province"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="confirmed" stroke="#A7BBC3"/>
                <Line type="monotone" dataKey="deaths" stroke="#FE667B"/>
            </LineChart>

            <div className="info-container">
                <div className="info info-location">
                Location : {Total.location}    
                </div>  
                <div className="info info-lastChecked">
                Last Checked : {Total.lastChecked}
                </div>
                <div className="info info-lastReported">
                Last Reported : {Total.lastReported}
                </div>
            </div>
        </>
    );
}


export default ShowCountryData;
