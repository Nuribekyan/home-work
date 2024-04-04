import { useState } from 'react';
import Main from './components/main/main';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Component1 from './components/component1/component1';
import Component2 from './components/component2/component2';
import { en, ru, TranslateContext } from './components/translate';

function App() {
  const [t, set_t] = useState(ru)
  return (
    <>
      <TranslateContext.Provider value={{ t, set_t }}>
        <Header />
        <Component1 />
        <Component2 />
        <Main />
        <Footer />
      </TranslateContext.Provider>
    </>
  );
}

export default App;
