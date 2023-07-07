import { Link } from "react-router-dom/cjs/react-router-dom.min";

function JobIndexItem(props) {
  return (
    <Link to={`/jobs/${props.job.id}`}>
      <li className="job-index-item">{props.job.title}</li>
    </Link>
  );
}

export default JobIndexItem;