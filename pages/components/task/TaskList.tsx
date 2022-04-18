import task from "pages/api/task"
import { Task } from "pages/interfaces/Task"
import { Card } from "semantic-ui-react"
import { takeCoverage } from "v8"

interface Props{
    tasks : Task[];
}

function TaskList({tasks}:Props) {
  return <Card.Group>
      {tasks.map(task =>(
          <Card key={task.Cod_Cons}>
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