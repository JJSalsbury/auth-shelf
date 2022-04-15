import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem';


function ShelfPage() {

  const dispatch = useDispatch();
  const shelf = useSelector(store => store.shelfReducer);



  useEffect(() => {
    dispatch({ type: 'GET_SHELF'});
  }, []);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {shelf.map((item) => {
        return (
          <ShelfItem
            item={item} />
        );
      })}

    </div>

  )

}

export default ShelfPage;
