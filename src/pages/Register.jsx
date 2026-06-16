import React from 'react'
import { useParams } from 'react-router'

const Register = () => {
  const params = useParams()
  return (
    <div>Register - {params.id}</div>
  )
}

export default Register