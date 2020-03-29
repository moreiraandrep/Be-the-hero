const connection = require('../database/connection');

module.exports = {
   async create(request, response) {
      const { id } = request.body; //busca o id no corpo da requisição

      const ong = await connection('ongs')
       .where('id', id)
       .select('name')
       .first(); //retorna somente um resultado com o nome da ONG

       if (!ong) {
          return response.status(400).json({ error: 'No ONG found with this ID.' });
       };

       return response.json(ong); //Se tudo deu certo, retorna os dados da ONG (Nome)
   }
}