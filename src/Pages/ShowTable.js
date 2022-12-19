import React, {useState} from "react";

import '../assets/styles/showTable.css';

export default function ShowTable() {


    const [countryRegionWise, setcountryRegionWise] = useState([]);

    const totalData = () => {


        const options1 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '060a0e62b3msh3b4dceebd52177fp1e5142jsn9222f9a719e6',
                'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
            }
        };
        fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=kl', options1).then(response => response.json()).then(response => {
            // console.log(response)
            // console.log(response.data.covid19Stats);
            setcountryRegionWise(response.data.covid19Stats)
        }).catch(err => console.error(err));

    }


    return (
        <> {
            totalData()
        }
            <div className="main-table-box">
                <table>
                    <tr>
                        <th id="header-table" colSpan='4'>World Data</th>
                    </tr>
                    <tr>
                        <th>Place</th>
                        <th>Confirmed Cases</th>
                        <th>Deaths Reported</th>
                        <th>Last Updated</th>
                    </tr>
                    {
                    countryRegionWise.map((e) => {
                        return (
                            <>
                                <tr>

                                    <td>{
                                        e.keyId
                                    }</td>
                                    <td>{
                                        e.confirmed
                                    }</td>
                                    <td>{
                                        e.deaths
                                    }</td>
                                    <td>{
                                        e.lastUpdate
                                    }</td>
                                </tr>
                            </>
                        )

                    })
                } </table>
            </div>
        </>
    );
}
