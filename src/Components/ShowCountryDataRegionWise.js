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

function ShowCountryDataRegionWise() {

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




        // setCountry("")


        // const timer = setTimeout(()=>{
        //     showGraph()
        // },3000);
        // return () => clearTimeout(timer);
        // timer();
        
    }else{
        alert("Please Enter Country Name")
    }
}

// const showGraph = ()=>{<>
//     console.log("I am show graph");
//     <BarChart width={730}
//                     height={250}
//                     data={ Total}>
//                     <CartesianGrid strokeDasharray="3 3"/>
//                     <XAxis dataKey="location"/>
//                     <YAxis/>
//                     <Tooltip/>
//                     <Legend/>
//                     <Bar dataKey="confirmed" fill="#8884d8"/>
//                     <Bar dataKey="deaths" fill="#82ca9d"/>
//                 </BarChart>
//     </>
// }
// useEffect(() => {
//     const timer = setTimeout(() => {
//     //   console.log('This will run after 1 second!')
//      <> <BarChart width={730}
//                     height={250}
//                     data={ Total[0]}>
//                     <CartesianGrid strokeDasharray="3 3"/>
//                     <XAxis dataKey="location"/>
//                     <YAxis/>
//                     <Tooltip/>
//                     <Legend/>
//                     <Bar dataKey="confirmed" fill="#8884d8"/>
//                     <Bar dataKey="deaths" fill="#82ca9d"/>
//                 </BarChart></>
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);
// let location  = {Total}


           let  graph = [
            {
                location: Total.location,
                confirmed:Total.confirmed,
                deaths:Total.deaths                
            }
           ]
    return(
        <><br/>
        I am ShowTotalCountryData!<br/>
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
                    <Bar dataKey="confirmed" fill="#8884d8"/>
                    <Bar dataKey="deaths" fill="#82ca9d"/>
                </BarChart>

{/* {
    countryRegionWise.map((e,i)=>{
        return(<div key={e}>
               { console.log(e.covid19Stats[10].keyId+" Hey")}
        </div>)
    })
} */}




        </>
    );
}
// }


export default ShowCountryDataRegionWise;









































// import React,{Component} from "react";
// import {
//     BarChart,
//     Tooltip,
//     Legend,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Bar,
//     LabelList,
//     LineChart,
//     Line
// } from 'recharts';

// class ShowTotalCountryData extends Component{

    
//     constructor(props) {
//         super(props);
//         this.state = {
//             Total: []
//         }
//     }




//     render(){   
        
//     const totalData = () =>{
//         // All Country
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '060a0e62b3msh3b4dceebd52177fp1e5142jsn9222f9a719e6',
//                 'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
//             }
//         };
//         fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada', options)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             this.setState({
//                 Total: [response.data]
//             })
//         }).catch(err => console.error(err));
//     }


//         return(
//             <>
//             {totalData()}

//             <BarChart width={730}
//                     height={250}
//                     data={this.state.Total}>
//                     <CartesianGrid strokeDasharray="3 3"/>
//                     <XAxis dataKey="location"/>
//                     <YAxis/>
//                     <Tooltip/>
//                     <Legend/>
//                     <Bar dataKey="confirmed" fill="#8884d8"/>
//                     <Bar dataKey="deaths" fill="#82ca9d"/>
//                 </BarChart>
//             </>
//         )
//     }
// }

// export default ShowTotalCountryData;