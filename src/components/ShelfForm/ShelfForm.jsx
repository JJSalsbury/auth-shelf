import {useDispatch} from 'react-redux';
import {useState} from 'react'

function ShelfForm () {

    const dispatch = useDispatch();

    const [item, setItem] = useState('');
    const [link, setLink] = useState('');

    const handleClick = () => {
        console.log('logging item, link: ', item, link);
        // dispatch({type: 'ADD_NEW_ITEM', payload: {item: item, link: link}});
    }

    return(<>

    <input 
    onChange={(event) => setItem(event.target.value)}
    placeholder="Add Item"></input>
    <input 
    onChange={(event) => setLink(event.target.value)}
    placeholder="Add Link to an Image"></input>

    <button onClick={handleClick}>ADD ITEM</button>
    
    </>)
}

export default ShelfForm;