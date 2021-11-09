import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Veículos System</h1>
          <p className="lead">Sistema para cadastro e controle de veículos novos e usados</p>
          <hr />
          <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
        </div>
        <Link className="btn btn-primary btn-lg" to="/veiculos">
          Acessar a lista de Veículos
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default Home;