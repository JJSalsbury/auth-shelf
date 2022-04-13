import { useDispatch } from 'react-redux';


function ShelfItem({ item }) {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'DELETE_ITEM', payload: item.id })
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