import QuotesApp from "./Components/QuotesApp"
import './Components/QuotesApp.css'


const App = () => {
  // initial state
  const apiKey = import.meta.env || '';
  const appTitle = import.meta.env.VITE_REACT_APP_NINJA_TITLE || 'no title found';
  console.log('app title:',appTitle)

  return (
    <QuotesApp title={appTitle} />
  )
}

export default App
