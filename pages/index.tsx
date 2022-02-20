import {Task} from './interfaces/Task'
import {Grid,Button, GridColumn} from 'semantic-ui-react'
import {Router, useRouter} from 'next/router'
import TaskList from './components/task/TaskList';
interface Props{
  task:Task[]
}
export default function IndexPage({task}: Props){
  const router = useRouter()
  return(
    <>
    {task.length==0 ? (
      <Grid columns={3} centered verticalAlign='middle' style={{height:"50%"}}>
        <Grid.Row>
          <Grid.Column>
            <h1>No hay datos aun</h1>
            <button onClick={()=>router.push('task/new')}>Crear datos</button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ):(
      <TaskList tasks={task}/>
    )}
    </>
  );
}

export const getServerSideProps = async () =>{
  const res = await fetch('http://localhost:3000/api/task')
  const task = await res.json()

  return {
    props: {
      task:task
    }
  }
}