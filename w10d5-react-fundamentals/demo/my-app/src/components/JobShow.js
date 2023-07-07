import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import jobData from "../assets/jobData";

function Test() {
  // debugger;
  return <h1>I'm Child of JobShow</h1>;
}

function JobShow() {
  const params = useParams();
  const jobId = params.jobId;
  const job = jobData[jobId];
  // debugger;


  return (
    <div className="job-show">
      <h1>{job.title}</h1>
      <h2>Salary: {job.salary}</h2>
      <h3>PTO: {job.pto}</h3>
      <h3>Saved: {job.pto}</h3>
      <h3>Applied: {job.applied}</h3>
      <Test />
    </div>
  )
}

export default JobShow;