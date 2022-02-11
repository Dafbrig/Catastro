import {NextApiRequest,NextApiResponse}from "next";
import { conexion } from "../../utiles/database";

export default async (req: NextApiRequest, res:NextApiResponse) => {
    const {method, query,body}=req;
    console.log(query);
    switch (method) {
        case "GET":
            try {
                const text="select * from Construccion where id=$1";
                const values = [query.id];
                const result =await conexion.query(text, values);
                if (result.rows.length == 0)
                    return res.status(404).json({message: "No encontrado"});
                    return res.json(result.rows[0]);
            } catch (error: any) {
                return res.status(500).json({message: error.message});
            }
        case "Put":
            try {
                const {Num_Pisos, Area_Total, Direccion}= body;
                const text="Update Construccion set Num_Pisos=$1, Area_Total=$2, Direccion=$3  where id=$4 returning *";
                const values = [Num_Pisos, Area_Total, Direccion, query.id];
                const result =await conexion.query(text, values);
                if (result.rows.length == 0)
                    return res.status(404).json({message: "No encontrado"});
                    return res.json(result.rows[0]);
            } catch (error: any) {
                return res.status(500).json({message: error.message});
            }
        case "Delete":
            try {
                const text="Delete from Construccion where id=$1 returning *";
                const values = [query.id];
                const result =await conexion.query(text, values);
                console.log(result);
                if (result.rowCount == 0)
                    return res.status(404).json({message: "No encontrado"})
                return res.json('deleting')
            } catch (error: any) {
                return res.status(500).json({message: error.message});
            }
        default:
            return res.status(400).json("No encontrado");
    }
}