var express = require('express');
var router = express.Router();
var Comic = require('../models').Comic;

/* GET movie listings 
   GET /movies
*/
router.get('/', function(req, res) {
  Comic.all(
    {
      order: [
        ['createdAt', 'ASC']
      ]
    }
  )
    .then( function(movies) {
      res.render('comics', { comics: comics })
    })
})

/* GET /movies/7/edit */
router.get('/:id/edit', function(req, res) {
  Comic.findById(req.params.id)
    .then( function(comic) {
      return res.render('edit', { comic: comic })
    })
})

/* PUT /movies/7 */
router.put('/:id', function(req, res) {
  Comic.update(
    { title: req.body.title },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/comics')
  })
})


/* POST /movies */
router.post('/', function(req, res) {
  //<input name="title" />
  Comic.create({ title: req.body.title })
    .then( function() {
      res.redirect('/comics')
    })
})

/* DELETE /movies/1 */
router.delete('/:id', function(req, res) {
  Comic.findById(req.params.id)
    .then( function(comic) {
      comic.destroy();
      return res.redirect('/comics');
    })
})



module.exports = router;






