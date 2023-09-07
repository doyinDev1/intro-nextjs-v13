import NewTodoForm from '@/components/NewTodoForm'
import React from 'react'

const DashboardLayout = ({children}) => {
    
  return (
    <div>
      <h1>DAshboard</h1>
      <div>
        <NewTodoForm/>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
