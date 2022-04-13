import { useDispatch } from 'react-redux';


function ShelfItem ({ item }) {

const dispatch = useDispatch();

const handleClick = () => {
    dispatch({ type: 'DELETE_ITEM', payload: item.id })
}


    return(
<button onClick={handleClick}>Yeet this</button>

    );
}

export default ShelfItem;