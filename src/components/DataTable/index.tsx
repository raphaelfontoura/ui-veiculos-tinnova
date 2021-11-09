import { useEffect, useState } from "react";
import axios from "axios";
import { Veiculo } from "types/veiculo"
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const DataTable = () => {

  const [veiculos, setVeiculos] = useState<Veiculo[]>();

  useEffect( () => {
    axios.get(`http://localhost:8080/veiculos`)
     .then(response => {
       setVeiculos(response.data);
     })
  }, []);

  return (
    <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Veículo</th>
              <th>Marca</th>
              <th>Ano</th>
              <th>Descricao</th>
              <th>Vendido</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {veiculos?.map(item => (
              <tr key={item.id}>
                <td>{item.veiculo}</td>
                <td>{item.marca}</td>
                <td>{item.ano}</td>
                <td>{item.descricao}</td>
                <td><input readOnly type="checkbox" checked={item.vendido} /></td>
                <td>
                  <FaEdit />
                  <FaTrashAlt />
                </td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
  );
}

export default DataTable;