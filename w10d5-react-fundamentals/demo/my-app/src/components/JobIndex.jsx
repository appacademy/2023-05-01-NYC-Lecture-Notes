import jobData from "../assets/jobData";
import JobIndexItem from "./JobIndexItem";

function JobIndex(props) {
  debugger;
  const jobs = Object.values(jobData);

  const jobList = jobs.map(job => {
    return <JobIndexItem key={job.id} job={job} />;
  });

  return (
    <div className="job-index">
      <h2>I'm JobIndex</h2>
      <ul>
        {jobList}
      </ul>
    </div>
  )
}

export default JobIndex;