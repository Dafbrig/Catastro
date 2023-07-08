import { NextApiRequest, NextApiResponse } from "next";
import { conexion } from "../../utiles/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query, body } = req;
  console.log(query);
  switch (method) {
    case "GET":
      try {
        const text = "SELECT * FROM Construccion WHERE id=$1";
        const values = [query.id];
        const result = await conexion.query(text, values);
        if (result.rows.length === 0)
          return res.status(404).json({ message: "No encontrado" });
        return res.json(result.rows[0]);
      } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }
    case "PUT":
      try {
        const { Num_Pisos, Area_Total, Direccion } = body;
        const text =
          "UPDATE Construccion SET Num_Pisos=$1, Area_Total=$2, Direccion=$3 WHERE id=$4 RETURNING *";
        const values = [Num_Pisos, Area_Total, Direccion, query.id];
        const result = await conexion.query(text, values);
        if (result.rows.length === 0)
          return res.status(404).json({ message: "No encontrado" });
        return res.json(result.rows[0]);
      } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }
    case "DELETE":
      try {
        const text = "DELETE FROM Construccion WHERE id=$1 RETURNING *";
        const values = [query.id];
        const result = await conexion.query(text, values);
        console.log(result);
        if (result.rowCount === 0)
          return res.status(404).json({ message: "No encontrado" });
        return res.json("Eliminado");
      } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }
    default:
      return res.status(400).json({ message: "Método no permitido" });
  }
};