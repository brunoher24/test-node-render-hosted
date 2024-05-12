const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const formCtrl = require('../controllers/form-test');
const multer = require('../middlewares/multer-config');

router.post('/', multer, formCtrl.create);
// router.put('/:id', auth, multer, sauceCtrl.modifySauce);
// router.delete('/:id', auth, sauceCtrl.deleteSauce);
// router.get('/:id', auth, sauceCtrl.getOneSauce);
// router.get('/', auth, sauceCtrl.getAllSauces); 
// router.post('/:id/like', auth, sauceCtrl.likeDislike); 

module.exports = router;