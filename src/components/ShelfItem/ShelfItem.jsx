import { useDispatch } from 'react-redux';


function ShelfItem({ item }) { //item coming from .map on ShelfPage 

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'DELETE_ITEM', payload: item.id }) //sends item id to saga with delete request
    }

    return (
        <>
            <img key={item.id}
                src={item.image_url} alt={item.description} />
            <p>{item.description}</p>

            {user.id ?

                <button style={{ color: 'white', backgroundColor: 'red' }}
                onClick={handleClick}>YEET</button>
                :
                <button style={{ color: 'black', backgroundColor: 'gray' }}>haha no clickies for you</button>
            }
        </>
    );
}

export default ShelfItem;