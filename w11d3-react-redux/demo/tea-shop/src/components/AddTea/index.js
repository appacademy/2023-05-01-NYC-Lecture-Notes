import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { receiveTea } from '../../store/teaReducer';

function AddTea(props) {
  const dispatch = useDispatch();
  const [flavor, setFlavor] = useState('');
  const [price, setPrice] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    dispatch(receiveTea({id, flavor, price}));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="flavor" 
        value={flavor}
        onChange={e => setFlavor(e.target.value)} />
      <input type="number"
        placeholder="price"
        value={price}
        onChange={e => setPrice(e.target.value)} />
      <input type="submit" value="Add Tea 🍵" />
    </form>
  );
}

export default AddTea;