import { NextApiRequest, NextApiResponse } from 'next';
import { conexion } from '../../utiles/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  try {
    switch (method) {
      case 'GET':
        return handleGetRequest(res);
      case 'POST':
        return handlePostRequest(body, res);
      default:
        return res.status(400).json('Método inválido');
    }
  } catch (error: any) {
    return res.status(500).json({ error: 'Error en el servidor' });
  }
}

async function handleGetRequest(res: NextApiResponse) {
  const query = 'SELECT * FROM Construccion';
  const response = await conexion.query(query);
  return res.status(200).json(response.rows);
}

async function handlePostRequest(body: any, res: NextApiResponse) {
  const { Cod_Cons, Num_Pisos, Area_Total, Direccion } = body;

  if (!Cod_Cons || !Num_Pisos || !Area_Total || !Direccion) {
    return res.status(400).json({ error: 'Campos requeridos faltantes' });
  }

  const query = 'INSERT INTO construccion(cod_Cons, num_Pisos, area_Total, direccion) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [Cod_Cons, Num_Pisos, Area_Total, Direccion];

  try {
    const response = await conexion.query(query, values);
    return res.status(200).json(response.rows);
  } catch (error: any) {
    return res.status(500).json({ error: 'Error al insertar datos en la base de datos' });
  }
}
