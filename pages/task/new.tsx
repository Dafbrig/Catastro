import {Card, Form, Button} from 'semantic-ui-react'
import { ChangeEvent, useState } from 'react'

export default function newPage(){
    const [task, setTask] = useState({
        Cod_Cons : '',
        Num_Pisos:'',
        Area_Total:'',
        Direccion:''
    })
    const handleChange = (e:ChangeEvent) => {

    }
    return (
        <div>
            <Card.Content>
                <Form>
                    <Form.Field>
                        <label htmlFor="Cod_Cons">Codigo de Construccion</label>
                        <input type="text" placeholder="Escribir Codigo de construccion" name="Cod_Cons" onChange={handleChange}/>
                    </Form.Field>
                    <Form.Field>
                    <label htmlFor="Num_Pisos">Numero de Pisos</label>
                    <input type="text" placeholder="Poner los pisos de la construccion" name="Num_Pisos" />
                    </Form.Field>
                    <Form.Field>
                    <label htmlFor="Area_Total">Area Total de la construccion</label>
                    <input type="text" placeholder="Poner el Area Total de la construccion" name="Area_Total" />
                    </Form.Field>
                    <Form.Field>
                    <label htmlFor="Direccion">Direccion de la construccion</label>
                    <input type="text" placeholder="Poner la direccion de la construccion" name="Direccion" />
                    </Form.Field>
                    <button>
                        Guardar
                    </button>
                </Form>
            </Card.Content>
        </div>
    )
}