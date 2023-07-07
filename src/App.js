import { useDispatch } from 'react-redux';
import Buttons from './components/ButtonSection/Buttons';
import Form from './components/FormSection/Form';
import ModalButtons from './components/ModalSection/ModalButtons';
import Selectors from './components/SelectorSection/Selectors';
import { PageLayout } from './styles/style';
import {closeAllModals} from './redux/modules/unCoverdModals'

function App() {
  const dispatch = useDispatch();
  const pageOnClick= ()=>{
    dispatch(closeAllModals());
  };
  return (
    <PageLayout onClick={pageOnClick}>
      <Buttons/>
      <Form/>
      <ModalButtons/>
      <Selectors/>
    </PageLayout>
  );
}

export default App;
