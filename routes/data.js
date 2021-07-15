const pool = require('../db');
const router = require('express').Router();
const authorize = require('../middleware/authorize');

router.post('/', authorize, async(req, res) => {
  try {
    const {work, leisure, game, happiness} = req.body;
    const newData = await pool.query('INSERT INTO parameters (owner_id, work, leisure, game, happiness) VALUES ($1, $2, $3, $4, $5);', [req.user.id, work, leisure, game, happiness]);
    res.json(newData);

  } catch (error) {
    console.error(error.message, "Data posting route.");
  }
});

router.get('/', authorize, async(req, res) => {
  try {
    const data = await pool.query('SELECT * FROM parameters WHERE owner_id = $1', [req.user.id])
    res.json(data);
  } catch (error) {
    console.error(error.message);
  }
})

module.exports = router;
