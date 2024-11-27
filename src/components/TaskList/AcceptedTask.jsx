import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';
const AcceptedTask = ({data}) => {

    const [userData, setUserData] = useContext(AuthContext)
    
    
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    

    
    

    function handleActive() {
        const updatedtasks = loggedInUser.data.tasks.map((elem) => {
          if (data.taskTitle === elem.taskTitle) {
            return {
              ...elem,
              completed: true,
              active: false,
            };
          }
          return elem;
        });
      
        const updatedUser = {
          ...loggedInUser.data,
          tasks: updatedtasks,
        };
      
        // Ensure updatedData creates a new array with new references
        const updatedData = userData.map((elem) => {
          if (loggedInUser.data.firstName === elem.firstName) {
            return { ...updatedUser }; // Return a new reference
          }
          return elem;
        });
      
        setUserData([...updatedData]); // Spread to ensure new array reference
      
        // Update localStorage to reflect the changes
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ ...loggedInUser, data: updatedUser })
        );

        window.location.reload();

      
        console.log("Updated Data:", updatedData);
      }
    function handlefailed() {
        const updatedtasks = loggedInUser.data.tasks.map((elem) => {
          if (data.taskTitle === elem.taskTitle) {
            return {
              ...elem,
              active: false,
              failed: true,
            };
          }
          return elem;
        });
      
        const updatedUser = {
          ...loggedInUser.data,
          tasks: updatedtasks,
        };
      
        // Ensure updatedData creates a new array with new references
        const updatedData = userData.map((elem) => {
          if (loggedInUser.data.firstName === elem.firstName) {
            return { ...updatedUser }; // Return a new reference
          }
          return elem;
        });
      
        setUserData([...updatedData]); // Spread to ensure new array reference
      
        // Update localStorage to reflect the changes
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ ...loggedInUser, data: updatedUser })
        );

        window.location.reload();

      
        console.log("Updated Data:", updatedData);
      }
    

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-6 '>
                <button 
                onClick={handleActive}
                className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button 
                onClick={handlefailed}
                className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptedTask