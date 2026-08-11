import React from 'react';
import { HashRouter as Router, Routes, Link, Route} from 'react-router-dom'

function App() {
  const Inicio=()=>(
    <div>
      <h2>
        <p>
          Bem Vindo ao meu Curriculo Online. Utilize o menu acima para navegar.
        </p>
      </h2>
    </div>
  );

  const Portifolio =()=>(
    <div>
      <h2>Portifolio</h2>
      <p>
          Bem Vindo ao meu Portifolio Online. Utilize o menu acima para navegar.
        </p>
    </div>
  );

  const Contato=()=>(
    <div>
      <h2>Contato</h2>
      <p>Envie uma mensagem para: email@email.com</p>
    </div>
  );

  return (
    <>
      <Router>
        <div>
          <nav className='navbar navbar-expand navbar-dark navbar-bg-dark'>
            <div className='container'>
              <span className='navbar-brand'>Meu Curriculum Online</span>
              <div className='navbar-nav'>
                <Link className='nav-link' to="/"> Home </Link>
                <Link className='nav-link' to="/portfolio"> Portfólio </Link>
                <Link className='nav-link' to="/contato"> Contato </Link>
              </div>
            </div>
          </nav>

          <div>
            <Routes>
              <Route path="/" element={<Inicio />} ></Route>
              <Route path="/portfolio" element={<Portifolio />} ></Route>
              <Route path="/contato" element={<Contato />} ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
