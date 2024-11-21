import React from 'react'

const Header = (props) => {
  // Retrieve the logged-in user data from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

  // Extract the username from the logged-in user data
  const username = loggedInUser?.role === 'employee' ? loggedInUser?.data?.firstName : 'Admin'

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')  // Clear logged in user from localStorage
    props.changeUser('')  // Change the user state in App.js to null or ''
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>
          {username} 👋
        </span>
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>
        Log Out
      </button>
    </div>
  )
}

export default Header
