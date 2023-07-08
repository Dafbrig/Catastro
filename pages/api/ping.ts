import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: 'Davidfer44',
  host: 'localhost',
  port: 5432,
  database: 'Catastro',
});

type Data = {
  message: string;
  time: string;
};

export default async (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const client = await pool.connect();
    const response = await client.query('SELECT NOW()');
    console.log(response);

    const currentTime = response.rows[0].now;
    client.release();

    return res.status(200).json({ message: 'pong', time: currentTime });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error', time: '' });
  }
};
