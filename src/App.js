import Home from './views/home/home';
import Balance from './views/balance/balance';
import MyNotes from './views/myNotes/myNotes';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Route, Routes } from 'react-router-dom';
import DoctorProfile from './views/doctorsProfile/doctorProfile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<DoctorProfile />} />
        <Route path='/notes' element={<MyNotes />} />
        <Route path='/balance' element={<Balance />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;