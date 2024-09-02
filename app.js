import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import gorevlerRoutes from './gorevler.routes.js'

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use(express.static('public'));

//MongoDB Bağlantısı
mongoose.connect('mongodb://localhost:27017/testdb', )

app.use('/gorev', gorevlerRoutes);

// Sunucuyu Başlatma
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});