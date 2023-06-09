import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostIndex = props => {
  console.log("Rendering...");

  const [data, setData] = useState([]);
  // debugger
  const { familyName } = useParams();

  useEffect(() => {
    console.log('fetching new data');
    const func = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const fetchedData = await res.json();
      setData(fetchedData);
    };
    func();
  }, []);
  console.log(familyName)
  // const title = familyName.slice(0, familyName.length - 1);

  return (
    <>
      <p>Fun {familyName} Posts</p>
      {data.map((ele, i) => (
        <div key={i} className="index-item">
          <p className='title'>{ele.title}</p>
          <p className='body'>{ele.body}</p>
        </div>
      ))}
    </>
  )
};

export default PostIndex;