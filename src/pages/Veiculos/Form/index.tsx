import Footer from "components/Footer"
import Navbar from "components/Navbar"
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Veiculo } from "types/veiculo";
import { makeRequest } from "utils/request";

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Form = () => {

  const [veiculo, setVeiculo] = useState<Veiculo>({
    veiculo: '',
    marca: '',
    descricao: '',
    ano: 0,
    vendido: false
  });

  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    makeRequest({ url: '/veiculos', method: 'POST', data: veiculo })
      .then(() => {
        setVeiculo({veiculo:'', marca:'', descricao:'', ano:0, vendido:false})
      })
  }

  const handleOnChange = ({ target }: FormEvent) => {
    const name = target.id;
    const value = target.value;
    // console.log({ name, value });
    setVeiculo(data => ({ ...data, [name]: value }))
  }

  const handleClick = (element: React.ChangeEvent<HTMLInputElement>) => {
    setVeiculo(data => ({...data, vendido: element.target.checked}))
  };

  const handleCancel = () => { 
    history.goBack()
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="veiculo">Veículo</label>
            <input type="text" className="form-control" id="veiculo" placeholder="Digite o nome do veículo" value={veiculo?.veiculo} onChange={handleOnChange} />
          </div>
          <div className="form-group">
            <label htmlFor="marca">Marca</label>
            <input type="text" className="form-control" id="marca" placeholder="Informe o fabricante" value={veiculo?.marca} onChange={handleOnChange} />
          </div>
          <div className="form-group">
            <label htmlFor="ano">Ano</label>
            <input type="number" className="form-control" id="ano" placeholder="Informe o ano do veículo no formato yyyy" value={veiculo.ano === 0 ? '' : veiculo.ano} onChange={handleOnChange} />
          </div>
          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea className="form-control" id="descricao" placeholder="Descrição" rows={3} value={veiculo?.descricao} onChange={handleOnChange} />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="vendido" checked={veiculo?.vendido} onChange={handleClick} />
            <label className="form-check-label" htmlFor="vendido">Vendido</label>
          </div>
          <button type="submit" className="btn btn-primary md-3">Salvar</button>
          <button className="btn btn-outline-danger" onClick={handleCancel}>Voltar</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Form