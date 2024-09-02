import express from 'express';
import * as gorevController from './gorev.controller.js';

const router = express.Router();

router.get('/', gorevController.listGorev);
router.post('/', gorevController.gorevEkle);
router.get('/:id', gorevController.getGorev);
router.delete('/:id', gorevController.gorevSil);
router.put('/:id', gorevController.gorevGuncelle)



export default router;