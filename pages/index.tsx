import {Task} from './interfaces/Task'
import {Grid,Button, GridColumn} from 'semantic-ui-react'
import {Router, useRouter} from 'next/router'
import TaskList from './api/tasks/TaskList';
import Layout from './components/Layout';

interface Props{
  tasks:Task[]
}
export default function IndexPage({tasks}: Props){
  const router = useRouter()
  return(
    <Layout>
    {tasks.length==0 ? (
      <Grid columns={3} centered verticalAlign='middle' style={{height:"50%"}}>
        <Grid.Row>
          <Grid.Column>
            <h1>No hay datos aun</h1>
            <button onClick={()=>router.push('task/new')}>Crear datos</button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ):(
      <TaskList tasks={tasks}/>
    )}
    </Layout>
  );
}

export const getServerSideProps = async () =>{
  const res = await fetch('http://localhost:3000/api/tasks')
  const task = await res.json()

  return {
    props: {
      task:task
    }
  }
}