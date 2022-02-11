import {Pool} from 'pg';

let conexion: any;
if(!conexion){

conexion=new Pool({
    user: 'postgres',
    password: 'Davidfer44',
    host: 'localhost',
    port: 5432,
    database: 'Catastro'
});
}
export {conexion};