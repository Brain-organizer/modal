import Buttons from './components/ButtonSection/Buttons';
import Form from './components/FormSection/Form';
import ModalButtons from './components/ModalSection/ModalButtons';
import Selectors from './components/SelectorSection/Selectors';
import { PageLayout } from './styles/style';

function App() {
  return (
    <PageLayout>
      <Buttons/>
      <Form/>
      <ModalButtons/>
      <Selectors/>
    </PageLayout>
  );
}

export default App;
