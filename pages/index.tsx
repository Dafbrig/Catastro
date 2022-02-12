import {Task} from './interfaces/Task'
interface props{
  task:Task[]
}

export default function index({task}: props){
  return(
    <>
    task.length==0 ? (
      <h1>No hay datos</h1>
    ):(
      <h1>Datos</h1>
    )
    </>
  )
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