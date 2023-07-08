import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import TaskList from './api/tasks/TaskList';
import Layout from './components/Layout';
import { Task } from './interfaces/Task';

interface Props {
  tasks: Task[];
}

const IndexPage: React.FC<Props> = ({ tasks }) => {
  const router = useRouter();

  const handleCreateTask = () => {
    router.push('/task/new');
  };

  return (
    <Layout>
      {tasks.length === 0 ? (
        <Grid columns={3} centered verticalAlign="middle" style={{ height: '50%' }}>
          <Grid.Row>
            <Grid.Column>
              <h1>No hay datos aún</h1>
              <Button onClick={handleCreateTask}>Crear datos</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ) : (
        <TaskList tasks={tasks} />
      )}
    </Layout>
  );
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/tasks');
    const tasks = await res.json();

    return {
      props: {
        tasks,
      },
    };
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return {
      props: {
        tasks: [],
      },
    };
  }
};

export default IndexPage;