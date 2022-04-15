import { useDispatch, useSelector } from 'react-redux';


function ShelfItem({ item }) { //item coming from .map on ShelfPage 

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    console.log(item);
    const handleClick = () => {
        dispatch({ type: 'DELETE_ITEM', payload: item.id }) //sends item id to saga with delete request
    }

    const evaluateUser = () => {
        if (item.user_id === user.id) { 
            return true 
        } else {
            return false
        }
    }

    return (
        <>
            <img key={item.id}
                src={item.image_url} alt={item.description} />
            <p>{item.description}</p>

            {evaluateUser() ?

                <button style={{ color: 'white', backgroundColor: 'red' }}
                    onClick={handleClick}>YEET</button>
                :
                <button style={{ color: 'black', backgroundColor: 'gray' }}>haha no clickies for you</button>
            }
        </>
    );
}

export default ShelfItem;