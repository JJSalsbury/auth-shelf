import {useDispatch} from 'react-redux';

function ShelfForm () {

    const handleClick = () => {
        console.log('you clicked it')
    }

    return(<>

    <input placeholder="Add Item"></input>
    <input placeholder="Add Link to an Image"></input>

    <button>ADD ITEM</button>
    
    </>)
}

export default ShelfForm;