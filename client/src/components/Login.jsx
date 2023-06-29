import { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { v4 as uuid } from 'uuid'

const Login = ( { setId }) => {

  const idRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    setId(idRef.current.value)
  }

  const createNewId = () => {
    setId(uuid())
  }

  return (
    <Container className='align-items-center d-flex h-screen'>
      <Form onSubmit={handleSubmit} className='w-full'>
        <Form.Group>
          <Form.Label>Enter your id</Form.Label>
          <Form.Control type='text' ref={idRef} required />
        </Form.Group>
        <Button type='submit' className='mr- m-2 bg-slate-600 text-lg'>Login</Button>
        <Button onClick={createNewId} variant='secondary' className='bg-slate-900 text-lg'>create new id</Button>
      </Form>
    </Container>
  )
}

export default Login