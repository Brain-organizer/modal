import './App.css';
import ButtonContainer from './components/ButtonContainer';
import FormContainer from './components/FormContainer';
import ModalContainer from './components/ModalContainer';
import SelectorContainer from './components/SelectorContainer';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle/>
      <ButtonContainer/>
      <FormContainer/>
      <ModalContainer/>
      <SelectorContainer/>
    </>
  );
}

export default App;
