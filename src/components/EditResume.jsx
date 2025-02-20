import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function EditResume() {
    const params = useParams();
    useEffect(()=>{
        console.log(params.resumeId);
    }, [])
  return (
    <div>
      <h1>Edit Resume</h1>
    </div>
  )
}

export default EditResume
