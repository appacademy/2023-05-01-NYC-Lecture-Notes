import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function StudentIndex(props) {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        // debugger;
        const fetchStudents = async () => {
            const data = await fetch("../data.json", {
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (data.ok) {
                const parsedData = await data.json();
                setStudents(parsedData);
            } else {
                alert("something went wrong");
            }
        }

        fetchStudents();
    }, []);
    // fetch request .then(setStudents(data))
    return(
        <>
            <h1> hello from student index</h1>
            {/* {console.log(students)} */}
            {students.map((student, i) => <Link key={i} to={`/students/${student.name}`}>{student.name}</Link>)}
        </>
    );
};

export default StudentIndex;