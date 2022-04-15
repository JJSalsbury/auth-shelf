import {useDispatch} from 'react-redux';
import {useState} from 'react'

function ShelfForm () {

    const dispatch = useDispatch();
    //state variables to capture input as they change: 
    const [item, setItem] = useState('');
    const [link, setLink] = useState('');

    //when add item button is clicked: 
    const handleClick = () => {
        // console.log('logging item, link: ', item, link);
        dispatch({type: 'ADD_NEW_ITEM', payload: {item: item, link: link}});
        setItem('');
        setLink('');
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