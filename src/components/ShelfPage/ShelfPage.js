import React from 'react';
import ShelfItem from '../ShelfItem/ShelfItem';

function ShelfPage() {
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
{/* .map will go here and then: 
<ShelfItem 
item = {item}/>
*/}
    </div>
  );
}

export default ShelfPage;
