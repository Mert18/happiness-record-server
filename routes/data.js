const client = require('../db');
const router = require('express').Router();
const authorize = require('../middleware/authorize');

router.post('/', authorize, async(req, res) => {
  try {
    const {work, leisure, game, happiness} = req.body;
    const newData = await client.query('INSERT INTO parameters (owner_id, work, leisure, game, happiness) VALUES ($1, $2, $3, $4, $5);', [req.user.id, work, leisure, game, happiness]);
    res.json(newData);

  } catch (error) {
    console.error(error.message, "Data posting route.");
  }
});

router.get('/', authorize, async(req, res) => {
  try {
    const data = await client.query('SELECT * FROM parameters WHERE owner_id = $1', [req.user.id])
    res.json(data);
  } catch (error) {
    console.error(error.message);
  }
})
router.get('/random', async(req, res) => {
  try {
    const data = await client.query('SELECT * FROM users ORDER BY random() LIMIT 10;')
    res.json(data.rows);
  } catch (error) {
    console.error(error.message);
  }
})
router.get('/:id', async(req, res) => {
  try {
    const data = await client.query('SELECT * FROM parameters WHERE owner_id = $1', [req.params.id])
    res.json(data.rows);
  } catch (error) {
    console.error(error.message);
  }
})

module.exports = router;
