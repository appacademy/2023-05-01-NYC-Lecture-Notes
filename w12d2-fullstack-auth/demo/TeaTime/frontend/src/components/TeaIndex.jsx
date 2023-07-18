import { useDispatch, useSelector } from "react-redux";
import { fetchAllTeas, removeTea } from "../store/teaReducer";
import { useEffect } from "react";

function TeaIndex(props) {
    const teas = useSelector(state => Object.values(state.teas));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTeas())
    }, [])

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