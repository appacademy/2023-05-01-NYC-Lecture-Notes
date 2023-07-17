// TODO: write a clock component

import React, { useEffect, useState } from "react";

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeData: {}
        };
    };
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    componentDidMount() {
        const fn = async () => {
            console.log("fetching time data");
            const res = await fetch('http://worldtimeapi.org/api/ip');
            if (res.ok) {
                let data = await res.json();
                this.setState({timeData: data});
            } else {
                throw res;
            }
        }
        this.intervalId = setInterval(fn, 1000);
//         return () => {
//             // debugger;
//             clearInterval(id);
//         };
    }

    render() {
        return (
            <h1>{this.state.timeData.datetime}</h1>
        );
    };
}

// const Time = props => {

//     const [timeData, setTimeData] = useState({});

//     useEffect(() => {
//         const fn = async () => {
//             console.log("fetching time data");
//             const res = await fetch('http://worldtimeapi.org/api/ip');
//             if (res.ok) {
//                 let data = await res.json();
//                 setTimeData(data);
//             } else {
//                 throw res;
//             }
//         }
//         const id = setInterval(fn, 1000);
//         return () => {
//             // debugger;
//             clearInterval(id);
//         };
//     }, [])
//     return (
//         <h1>{timeData.datetime}</h1>
//     );
// };

export default Time;