import { Task } from "pages/interfaces/Task"
import { Card } from "semantic-ui-react"
import {useRouter} from "next/router";

interface Props{
    tasks : Task[];
}

function TaskList({tasks}:Props) {
    const router = useRouter()
  return <Card.Group>
      {tasks.map(task =>(
          <Card key={task.Cod_Cons} onClick={()=>router.push('/task/edit/${task.id}')}>
              <Card.Content>
                  <Card.Header>{task.Direccion}</Card.Header>
                  <Card.Description>{task.Area_Total}</Card.Description>
                  <Card.Description>{task.Num_Pisos}</Card.Description>
              </Card.Content>
          </Card>
      ))}
  </Card.Group>
}

export default TaskList