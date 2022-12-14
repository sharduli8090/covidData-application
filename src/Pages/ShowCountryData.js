import React,{ useState,useEffect} from "react";
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

            const[country,setCountry] = useState("");
            const onChangedValue = (e) =>{
                setCountry(e.target.value)
            }
            const[Total,setTotal] = useState([]);
            const[countryRegionWise,setcountryRegionWise] = useState([]);
            // const[TotalGraph,setTotalGraph] = useState([]);
                 
    const totalData = (country) =>{
        // All Country
        if(country!==""){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '060a0e62b3msh3b4dceebd52177fp1e5142jsn9222f9a719e6',
                'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
            }
        };
        
        fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country='+country, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setTotal(response.data)
            // setTotalGraph(response.data)
        }).catch(err => console.error(err));
        // console.log(Total.location+" Total.location");
        if(Total.location==="Global"){
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
        fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country='+country, options1)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            // setTotal(response.data)
            setcountryRegionWise(response.data)
            // setTotalGraph(response.data)
        }).catch(err => console.error(err));

        
    }else{
        alert("Please Enter Country Name")
    }
}


           let  graph = [
            {
                location: Total.location,
                confirmed:Total.confirmed,
                deaths:Total.deaths                
            }
           ]
           let graph2 = [];
    return(
        <>
        I am ShowCountryData!
        <input type='text' onChange={onChangedValue} value={country}/>
        <button onClick={()=>totalData(country)} >Hey</button>
        {console.log(Total.location+" Total.location")} <br/>
 
        Last Checked : {Total.lastChecked}<br/>
        Last Reported : {Total.lastReported}<br/>
        Location : {Total.location}<br/>




        <BarChart width={730}
                    height={250}
                    data={ graph}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="location"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="confirmed" fill="#A7BBC3"/>
                    <Bar dataKey="deaths" fill="#FE667B"/>
                </BarChart>






        </>
    );
}



export default ShowCountryData;