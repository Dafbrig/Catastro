import { Card, Form, Button, Grid, Confirm } from 'semantic-ui-react';
import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import Layout from 'pages/components/Layout';
import { Task } from 'pages/interfaces/Task';

const NewPage = () => {
  const [task, setTask] = useState<Task>({
    Cod_Cons: '',
    Num_Pisos: '',
    Area_Total: '',
    Direccion: ''
  });

  const [openConfirm, setOpenConfirm] = useState(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTask((prevTask: any) => ({ ...prevTask, [name]: value }));
  };

  const createTask = async (task: Task) => {
    await fetch('http://localhost:3000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    });
  };

  const loadTask = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/tasks/${id}`);
    const task = await res.json();
    setTask(task);
  };

  const updateTask = async (id: string, task: Task) => {
    await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task)
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (typeof router.query.id === 'string') {
        await updateTask(router.query.id, task);
      } else {
        await createTask(task);
      }
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: 'DELETE'
      });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (typeof router.query.id === 'string') {
      loadTask(router.query.id);
    }
  }, [router.query]);

  return (
    <Layout>
      <Grid centered columns={3} verticalAlign='middle' style={{ height: '70%' }}>
        <Grid.Column>
          <Card>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label htmlFor="Cod_Cons">Codigo de Construccion</label>
                <input type="number" placeholder="Escribir Codigo de construccion" name="Cod_Cons" value={task.Cod_Cons} onChange={handleChange} />
              </Form.Field>
              <Form.Field>
                <label htmlFor="Num_Pisos">Numero de Pisos</label>
                <input type="text" placeholder="Poner los pisos de la construccion" name="Num_Pisos" value={task.Num_Pisos} onChange={handleChange} />
              </Form.Field>
              <Form.Field>
                <label htmlFor="Area_Total">Area Total Construccion</label>
                <input type="text" placeholder="Poner el Area Total de la construccion" name="Area_Total" value={task.Area_Total} onChange={handleChange} />
              </Form.Field>
              <Form.Field>
                <label htmlFor="Direccion">Direccion construccion</label>
                <input type="text" placeholder="Poner la direccion de la construccion" name="Direccion" value={task.Direccion} onChange={handleChange} />
              </Form.Field>
              <Button type="submit" color='teal'>{router.query.id ? 'Actualizar' : 'Guardar'}</Button>
            </Form>
          </Card>
          {router.query.id && (
            <Button color='red' onClick={() => setOpenConfirm(true)}>Eliminar</Button>
          )}
        </Grid.Column>
      </Grid>
      <Confirm
        header='Eliminar Catastro'
        content={`¿Seguro de eliminar el Catastro ${router.query.id}?`}
        open={openConfirm}
        onCancel={() => setOpenConfirm(false)}
        onConfirm={() => typeof router.query.id === 'string' && handleDelete(router.query.id)}
      />
    </Layout>
  );
};

export default NewPage;