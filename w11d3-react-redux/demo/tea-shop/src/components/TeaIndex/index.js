import { useDispatch, useSelector } from "react-redux";
import { removeTea } from "../../store/teaReducer";

function TeaIndex(props) {
  const teas = useSelector(state => Object.values(state.teas));
  const dispatch = useDispatch();

  // debugger;
  const TeaList = teas.map(tea => {
    return (
      <li key={tea.id}>
        <p>Flavor: {tea.flavor}</p>
        <p>Price: ${tea.price}</p>
        <button onClick={e => dispatch(removeTea(tea.id))}>Remove</button>
      </li>
    )
  });

  return (
    <div className="tea-index">
      <ul>
        {TeaList}
      </ul>
    </div>
  );
}

export default TeaIndex;