import { Pool } from 'pg';

const conexion = new Pool({
  user: 'postgres',
  password: 'Davidfer44',
  host: 'localhost',
  port: 5432,
  database: 'Catastro'
});

export { conexion };
