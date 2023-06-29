import useLocalStorage from './hooks/useLocalStorage'
import Dashboard from './components/Dashboard'
import Login from "./components/Login"
import { ContactsProvider } from './contexts/ContactsProvider'

const App = () => {

  const [ id, setId ] = useLocalStorage('id')

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  )

  return (
    <>
      {id ? dashboard : <Login setId = {setId}/>}
    </>
  )
}

export default App