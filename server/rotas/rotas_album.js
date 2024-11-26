import express from 'express'
import { pegarTodosAlbums, pegarAlbumPorId, pegarMusicaPeloAlbum, getMaisOuvidas } from '../controlador/controlador_album.js';

const rotas_albums = express.Router();

rotas_albums.get('/', pegarTodosAlbums);
rotas_albums.get('/mais-ouvidas', getMaisOuvidas)
rotas_albums.get('/:id', pegarAlbumPorId); 
rotas_albums.get('/:id/musicas/', pegarMusicaPeloAlbum);

export {rotas_albums};