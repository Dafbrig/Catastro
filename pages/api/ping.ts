import{NextApiRequest, NextApiResponse} from 'next';
import{ conexion } from '../utiles/database';
type Data={
  message: string;
  time: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const response = await conexion.query('select now()')
  console.log(response);
  
  return res.json({message: "pong", time: response.rows[0].now});
};