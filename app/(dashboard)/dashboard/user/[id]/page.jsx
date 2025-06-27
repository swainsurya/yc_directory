import React from 'react'

const page = async({params}) => {
    const {id} = await params;
  return (
    <div>
      Hello user {id}
    </div>
  )
}

export default page
