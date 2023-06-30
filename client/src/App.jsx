import useLocalStorage from './hooks/useLocalStorage'
import Dashboard from './components/Dashboard'
import Login from "./components/Login"
import { ContactsProvider } from './contexts/ContactsProvider'
import { ConversationsProvider } from './contexts/ConversationsProvider'

const App = () => {

  const [ id, setId ] = useLocalStorage('id')

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )

  return (
    <>
      {id ? dashboard : <Login setId = {setId}/>}
    </>
  )
}

export default App