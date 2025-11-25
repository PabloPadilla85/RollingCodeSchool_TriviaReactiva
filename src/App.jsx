import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SolicitarTrivia from './components/SolicitarTrivia'

function App() {

  return <>
    <div className='container text-center gap-3 mt-2'>
      <p className='display-3'>Trivia</p>
    </div>
    <div className='container'>
      <SolicitarTrivia />
    </div>
  </>
}

export default App
