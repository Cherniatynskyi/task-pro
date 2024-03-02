import { Routes, Route } from 'react-router-dom';
import { AuthPage } from 'pages/AuthPage/AuthPage';
import './App.css';

// import { ModalBody } from './Modals/ModalBody';
// import { useSelector } from 'react-redux';
// import { openModal } from '../redux/modalSlice'; //імпорт методу відкриття модалки

function App() {
  // const {isOpen} = useSelector((state) => state.modal)

  // const dispatch = useDispatch()
  // const openModalHandler = () => {
  //   dispatch(openModal('add-board'))
  // } функція відкриття модалки і передачі контенту
  //<button onClick={openModalHandler}>OPEN MODAL</button> КНОПКА ТРИГЕРУ МОДАЛКИ

  return (
    <>
      {/* {isOpen && <ModalBody/>} */}
      <Routes>
        <Route path="auth/:id" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
