import { NextApiRequest,NextApiResponse } from "next";
import { conexion } from "../../utiles/database";

export default async (req:NextApiRequest, res:NextApiResponse) =>{
    const {method, body}=req;

    switch(method){
        case 'GET':
            try{
            const query = "Select * From Construccion"
            const response = await conexion.query(query);
            return res.status(200).json(response.rows);
        }catch(error:any){
            return res.status(400).json({error:error.message});
        }
        case 'POST':
            try {
            const {Cod_Cons, Num_Pisos, Area_Total,Direccion}=body;
            const query = "insert into Construccion(Cod_Cons, Num_Pisos, Area_Total,Direccion) values ($1,$2,$3,$4) returning *"
            const values =[Cod_Cons, Num_Pisos, Area_Total, Direccion]
            const response = await conexion.query(query,values)
            return res.status(200).json(response.rows);
        }catch(error:any){
            return res.status(400).json({error:error.message});
        }
        break
        return res.status(400).json("invalid method");
    }
}