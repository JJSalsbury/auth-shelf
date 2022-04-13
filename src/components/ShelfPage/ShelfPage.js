import React from 'react';

function ShelfPage({item}) {


  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.ShelfPage);
  const classes = useStyles();


  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
