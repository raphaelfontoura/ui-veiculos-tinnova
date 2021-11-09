import Navbar from "components/Navbar";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import { Link } from "react-router-dom";


const Veiculos = () => {
  return (
    <>
      <Navbar />
      <div className="container">

        <Link to="/veiculos/novo">
          <button type="button" className="btn btn-primary">Adicionar</button>
        </Link>
        <h2>Veículos</h2>
        <DataTable />

      </div>
      <Footer />
    </>
  )
}

export default Veiculos;
