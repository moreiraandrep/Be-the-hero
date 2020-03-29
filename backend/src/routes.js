const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Rota para o Login
routes.post('/sessions', SessionController.create);

//Rota para as ONGs (criar e listar)
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Rotas para os Casos (Criar, Listar, Deletar)
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//Rota para Listar um Caso específico
routes.get('/profile', ProfileController.index);

module.exports = routes;
