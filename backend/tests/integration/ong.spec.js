const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
   beforeEach(async () => {
      await connection.migrate.rollback();
      await connection.migrate.latest();
   });

   afterAll(async () => {
      await connection.destroy();
   });
 
   it('should be able to create a new ONG', async () => {
      /**Para testar rotas com Header adicionar o método .set('Authorization', 'sa23ed14') antes do .post()... 
       * Obs: O segundo parametro é o ID válido (existente) */
      const response = await request(app)
         .post('/ongs')
         .send({
            name: "APAD",
            email: "moreira.andre.p@gmail.com",
            whatsapp: "44998567906",
            city: "Maringa",
            uf: "PR"
         });

      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
   });
});
