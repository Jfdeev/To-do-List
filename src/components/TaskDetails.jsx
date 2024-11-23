import React from 'react';
import Button from './Button';
import { useParams } from 'react-router-dom';


const TaskDetails = () => {

    const { taskTitle } = useParams();

    return ( 
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <p>{taskTitle}</p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id consequuntur sequi cum tenetur unde odio tempora quis, enim neque tempore voluptatum, ea iste praesentium. Architecto delectus quibusdam consequuntur odit suscipit.
                </p>
            </div>
        </>
    );
}
 
export default TaskDetails;