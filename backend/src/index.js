const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 * Métodos HTTP
 * 
 * GET: Busca uma informação no back-end
 * POST: Cria uma informação no back-end
 * PUT: Altera uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 * Tipos de Parametros
 * Query Params: PArametros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alteraar recursos
 * 
 * Banco de Dados: SQLite
 * Query Builder: KNEX.JS
 * 
 * Entidades:
 *    ONG
 *    Caso (Incidents)
 * 
 * Funcionalidades:
 *    Login de ONG
 *    Logout de ONG
 *    Cadastro de ONG
 *    Cadastrar novos Casos
 *    Deletar Casos
 *    Listar Casos especificos de uma ONG
 *    listar todos os Casos
 *    Entrar em contato com uma ONG
 */
