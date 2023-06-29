import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ConversationsContext = React.createContext()

export const useConversations = () => {
  return useContext(ConversationsContext)
}

export const ConversationsProvider = ( { children } ) => {

  const [conversations, setConversations] = useLocalStorage('conversations', [])

  const createConversation = (recepients) => {
    setConversations(prevConversation => {
      return [ ...prevConversation, { recepients, messages: []}]
    })
  }

  return (
    <ConversationsContext.Provider value={{ conversations, createConversations }}>
      {children}
    </ConversationsContext.Provider>
  )
}
