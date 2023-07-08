import React from 'react';
import { Card } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { Task } from 'pages/interfaces/Task';

interface Props {
  tasks: Task[];
}

const TaskList: React.FC<Props> = ({ tasks }) => {
  const router = useRouter();

  const handleTaskClick = (taskId: string) => {
    router.push(`/task/edit/${taskId}`);
  };

  return (
    <Card.Group>
      {tasks.map((task: { id: string; Direccion: any; Area_Total: any; Num_Pisos: any; }) => (
        <Card key={task.id} onClick={() => handleTaskClick(task.id)}>
          <Card.Content>
            <Card.Header>{task.Direccion}</Card.Header>
            <Card.Description>{task.Area_Total}</Card.Description>
            <Card.Description>{task.Num_Pisos}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default TaskList;