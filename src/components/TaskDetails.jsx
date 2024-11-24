import React from 'react';
import Button from './Button';
import {  useParams } from 'react-router-dom';
import './TaskDetails.css';
import { useNavigate } from 'react-router-dom';


const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/');
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p> 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id consequuntur sequi cum tenetur unde odio tempora quis, enim neque tempore voluptatum, ea iste praesentium. Architecto delectus quibusdam consequuntur odit suscipit.
                </p>
            </div>
        </>
    );
}
 
export default TaskDetails;