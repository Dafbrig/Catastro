import { Button, Container, Menu} from "semantic-ui-react";
import Image from "next/image";
import {useRouter} from "next/router";

export default function navbar (){
    const router = useRouter()
    return(
        <Menu inverted attached style={{padding: '1.Srem'}}>
            <Container>
                <Menu.Item onClick={()=>router.push('/')}>
                    <Image 
                    src='https://i.pinimg.com/564x/fa/99/69/fa99695d46c1e28ef267519904f8dcb5.jpg' 
                    width={30} 
                    height={30} 
                    alt='Logo'
                    />

                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button onClick={()=>router.push("/tasks/new")}>New Task</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    )
}