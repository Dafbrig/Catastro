import {Pool} from 'pg';

let coneccion: any;
if(!coneccion){

new Pool({
    user: 'postgres',
    password: 'Davidfer44',
    host: 'localhost',
    port: 5432,
    database: 'Catastro'
})
}
export {coneccion};