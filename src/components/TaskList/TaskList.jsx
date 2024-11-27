import React from 'react';
import AcceptedTask from './AcceptedTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
    return (
        <div
            id='tasklist'
            className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'
        >
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptedTask key={idx} data={elem} assignedTo={data.firstName} />;
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} assignedTo={data.firstName} />;
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />;
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />;
                }
                return null;
            })}
        </div>
    );
};

export default TaskList;
