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

                <button onClick={handleClick}>Yeet this!</button>
                :
                <button onClick ={ () => {}} </>>Nom nom</button>
            }
        </>
    );
}

export default ShelfItem;