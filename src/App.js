import './App.css';
import StyledText from './components/text/StyledText';
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <div className='exercice'>
        <StyledText />
        <StyledText textColor='blue' />
        <StyledText textColor='green' />
        <StyledText textColor='red' text='Texto alternativo passado por props'/>
      </div>
      <div className='exercice'>
        <Button/>
        <Button label='Salvar' />
        <Button label='Download' />
        <Button label='Enviar' />
      </div>
    </div>
  );
}

export default App;