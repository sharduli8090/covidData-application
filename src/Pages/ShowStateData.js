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

function ShowStateData() {

    const [state, setState] = useState("");
    const onChangedValue = (e) => {
        setState(e.target.value)
    }

    const [countryRegionWise, setcountryRegionWise] = useState([]);

    const totalData = (state) => {


        if (state !== "") {

            setState("")


            const options1 = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '060a0e62b3msh3b4dceebd52177fp1e5142jsn9222f9a719e6',
                    'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
                }
            };
            fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=kl', options1).then(response => response.json()).then(response => {
                console.log(response)
                console.log(response.data.covid19Stats);
                setcountryRegionWise(response.data.covid19Stats)
            }).catch(err => console.error(err));

            countryRegionWise.map((e, ind) => {
                if (e[ind].keyId.includes(state)) {
                    stateIndex = ind;
                } else {
                    alert('Data Not Found')
                }
            })

        } else {
            alert("Please Enter Country Name")
        }
    }
    let stateIndex = 0;

    let graph = [{
            location: countryRegionWise[stateIndex] && countryRegionWise[stateIndex].keyId,
            confirmed: countryRegionWise[stateIndex] && countryRegionWise[stateIndex].confirmed,
            deaths: countryRegionWise[stateIndex] && countryRegionWise[stateIndex].deaths
        }]
    return (
        <>
            <input type='text'
                onChange={onChangedValue}
                value={state}/>
            <button onClick={
                () => totalData(state)
            }>Show</button>
            {}

            <BarChart width={1500}
                height={250}
                data={graph}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="keyId"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="confirmed" fill="#A7BBC3"/>
                <Bar dataKey="deaths" fill="#FE667B"/>
            </BarChart>


            <div className="info-container">
                <div className="info info-location">
                    Location : {
                    graph.location
                } </div>
                {/* <div className="info info-lastChecked">
                Last Checked : {graph.lastChecked}
                </div>
                <div className="info info-lastReported">
                Last Reported : {Total.lastReported}
                </div> */} </div>

        </>
    );
}


export default ShowStateData;
