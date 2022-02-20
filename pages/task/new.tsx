import {Card, Form, Button} from 'semantic-ui-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from 'pages/interfaces/Task'
import router, {useRouter} from 'next/router'

export default function newPage(){
    const [task, setTask] = useState({
        Cod_Cons:'', 
        Num_Pisos:'',
        Area_Total:'',
        Direccion:''
    })
    const handleChange = ({target: {name, value},}: ChangeEvent<HTMLInputElement|HTMLAreaElement>) => setTask ({...task,[name]:value})
    const createTask=async(task:Task)=>{ await fetch('http://localhost:3000/api/task',{method:'POST',headers:{'Content-Type':'aplication/json'},body: JSON.stringify(task)})}
    const handleSumbit =async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    try {
        await createTask(task)
        router.push("/")
    } catch (error) {
        console.log(error);
    }
}
    return (
        <div>
            <Card.Content>
                <Form onSubmit={handleSumbit}>
                    <Form.Field>
                        <label htmlFor="Cod_Cons">Codigo de Construccion</label>
                        <input type="number" placeholder="Escribir Codigo de construccion" name="cod_Cons" onChange={handleChange}/>
                    </Form.Field>
                    <Form.Field>
                    <label htmlFor="Num_Pisos">Numero de Pisos</label>
                    <input type="text" placeholder="Poner los pisos de la construccion" name="num_Pisos" onChange={handleChange}/>
                    </Form.Field>
                    <Form.Field>
                    <label htmlFor="Area_Total">Area Total de la construccion</label>
                    <input type="text" placeholder="Poner el Area Total de la construccion" name="area_Total" onChange={handleChange}/>
                    </Form.Field>
                    <Form.Field>
                    <label htmlFor="Direccion">Direccion de la construccion</label>
                    <input type="text" placeholder="Poner la direccion de la construccion" name="direccion" onChange={handleChange}/>
                    </Form.Field>
                    <button>Guardar</button>
                </Form>
            </Card.Content>
        </div>
    )
}