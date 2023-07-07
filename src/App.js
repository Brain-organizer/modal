import Buttons from './components/ButtonSection/Buttons';
import Form from './components/FormSection/Form';
import ModalButtons from './components/ModalSection/ModalButtons';
import Selectors from './components/SelectorSection/Selectors';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Buttons/>
      <Form/>
      <ModalButtons/>
      <Selectors/>
    </>
  );
}

export default App;
