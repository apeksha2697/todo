import React from 'react'
import Task from './Task';
import './Home.css';
import { Card } from "semantic-ui-react";

function Home() {
  return (
    <div>
      <Card style={{padding: "20px", margin: "2cm"}}>
				<span className='title'>Todo list</span>
				<Task />
			</Card>
  	</div>
  )
}

export default Home;
