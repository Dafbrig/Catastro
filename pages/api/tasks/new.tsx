import {Card, Form, Button, Grid, Confirm} from 'semantic-ui-react'
import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { Task } from 'pages/interfaces/Task'
import router, {useRouter} from 'next/router'
import Layout from 'pages/components/Layout'

export default function newPage(){
    const [task, setTask] = useState({
        Cod_Cons:'', 
        Num_Pisos:'',
        Area_Total:'',
        Direccion:''
    })

    const [openConfirm, setopenConfirm] = useState(false)
    const router =useRouter();
    const handleChange = ({currentTarget: {name, value},}: React.FormEvent<HTMLInputElement>) => setTask ({...task,[name]:value})
    const createTask=async(task:Task)=>{ await fetch('http://localhost:3000/api/tasks',{method:'POST',headers:{'Content-Type':'aplication/json'},body: JSON.stringify(task)})}

    const loadTask = async (id: string) => {
        const res = await fetch("http://localhost:3000/api/tasks/"+id)
        const task = await res.json()
        setTask({Cod_Cons: task.Cod_Cons, Num_Pisos: task.Num_pisos, Area_Total: task.Area_Total, Direccion: task.Direccion  });
    }

    const updateTask = async (id:string, task: Task) => {
        await fetch("http://localhost:3000/api/tasks"+id, {
            method: "PUT",
            headers :{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(task),
        })
    }

    const handleSumbit =async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    try {
        if (typeof router.query.id === 'string'){
            updateTask(router.query.id, task)
        }else{
            await createTask(task)
        }
        router.push("/")
    } catch (error) {
        console.log(error);
    }
}

const handleDelete = async (id: string) => {
    try{
        await fetch("http://localhost:3000/api/tasks"+id, {method: "DELETE",});
        router.push("/")
    }catch(error){
        console.log(error)
    }
}

useEffect(()=>{
    if(typeof router.query.id === 'string') loadTask(router.query.id);
}, [router.query])
    return (
        <Layout>
            <Grid centered colums={3} verticalAlign='middle' style={{height: '70%'}}>
                <Grid.Column>
                    <Card>
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
                            <label htmlFor="Area_Total">Area Total Construccion</label>
                            <input type="text" placeholder="Poner el Area Total de la construccion" name="area_Total" onChange={handleChange}/>
                            </Form.Field>
                            <Form.Field>
                            <label htmlFor="Direccion">Direccion construccion</label>
                            <input type="text" placeholder="Poner la direccion de la construccion" name="direccion" onChange={handleChange}/>
                            </Form.Field>
                            {
                                router.query.id ? (
                                    <button color='Teal'>Actulizar</button>
                                ):(
                                    <button>Guardar</button>
                                )
                            }
                        </Form>
                    </Card>
                    <Button color='red' onClick={() =>setopenConfirm(true)}>Eliminar</Button>
                </Grid.Column>
            </Grid>
            <Confirm header='Eliminar Catastro' 
            content='¿Seguro de la eliminacion del Catastro ${router.query.id}?'
            open={openConfirm}
            onCancel={()=>setopenConfirm(false)}
            onConfirm={()=>typeof router.query.id === "string" && handleDelete(router.query.id)}
            />
        </Layout>
    )
}