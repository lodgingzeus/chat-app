import { useState } from 'react'
import { Modal, Form, Button, FormLabel } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'
import { useConversations } from '../contexts/ConversationsProvider'

const NewConversationModal = ( { closeModal } ) => {

  const [selectedContactIds, setSelectedContactIds] = useState([])

  const { contacts } = useContacts()
  const { createConversations } = useConversations()

  const handleChange = (id) => {
    setSelectedContactIds(previousSelectedContactIds => {
      if(previousSelectedContactIds.includes(id)) {
        return previousSelectedContactIds.filter(prevId => {
          return id !== prevId
        })
      } else {
        return [...previousSelectedContactIds, id]
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    createConversations(selectedContactIds)
    closeModal()
  }

  return (
    <>
    <Modal.Header closeButton>Create Conversation</Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        {contacts.map(contact => (
          <Form.Group controlId={contact.id} key={contact.id}>
            <Form.Check
            type='checkbox'
            value={selectedContactIds.includes(contact.id)}
            label = {contact.name}
            onChange={() => handleChange(contact.id)}
            ></Form.Check>
          </Form.Group>
        ))}
        <Button type="submit">Create</Button>
      </Form>
    </Modal.Body>
  </>
  )
}

export default NewConversationModal