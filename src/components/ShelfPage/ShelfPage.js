import React from 'react';
import { useSelector } from 'react-redux';


function ShelfPage({item}) {

  const dispatch = useDispatch();
  const item = useSelector(store => store.ShelfPage);



  useEffect(() => {
    dispatch({ type: 'GET_SHELF', payload: item.id });
  }, []);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <div key={item.id}>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default ShelfPage;
