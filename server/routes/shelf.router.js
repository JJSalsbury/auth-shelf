const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')


/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {

  console.log('/shelf GET route');
  console.log('is authenticated?', req.isAuthenticated());
  // console.log('results', result.rows);
  
  const queryText = `SELECT * FROM "item"`;

  pool.query(queryText).then((result) => {
    res.send(result.rows);
    res.sendStatus(200);// For testing only, can be removed
    
}).catch((error) => {
    console.log(error);
    res.sendStatus(500);
});
   
});



/**
 * Add an item for the logged in user to the shelf
 */
router.post('/',  (req, res) => {
  // endpoint functionality

  
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  const id = [req.body]
  const queryText = (`SELECT * 
                    FROM "item"
                    WHERE "item".id = $1       
;`)
  pool
    .query(queryText, id)
    .then((response) => {
      console.log('Deleted')
      res.sendStatus(200);
    })
    .catch ((error) => {
    console.log('Error in DELETE:', error);
    res.sendStatus(500);
  });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
