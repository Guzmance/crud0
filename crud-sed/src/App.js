import logo from './logo.svg';
import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

function App() {

  const shopList = [
    { id: 1, Producto: "Soda", Cantidad: 2 },
    { id: 2, Producto: "Tomate", Cantidad: 5 },
    { id: 3, Producto: "Leche", Cantidad: 1 },
  ];

  const [data, setData] = useState(shopList);


  return (
    
    <div className="App">
      <h2>Listado de Compras del Super (Labo 3 - SED)</h2>
      <br />
    <button className="btn btn-success" >Agregar Producto</button>
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Modificar</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.Producto}</td>
              <td>{elemento.Cantidad}</td>
              <td><button className="btn btn-primary" >Editar</button> {"   "} 
              <button className="btn btn-danger" >Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

      <Modal >
        <ModalHeader>
          <div>
            <h3>Editar producto</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
            />
            <br />

            <label>Producto</label>
            <input
              className="form-control"
              type="text"
              name="Producto"
            />
            <br />

            <label>Cantidad</label>
            <input
              className="form-control"
              type="text"
              name="Cantidad"
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" >
            Actualizar
          </button>
          <button
            className="btn btn-danger"
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>


      <Modal>
        <ModalBody>
          ¿Estás seguro que deseas eliminar el producto "?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" >
            Sí
          </button>
          <button
            className="btn btn-secondary"
          >
            No
          </button>
        </ModalFooter>
      </Modal>


        <Modal>
        <ModalHeader>
          <div>
            <h3>Insertar producto</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
            />
            <br />

            <label>Producto</label>
            <input
              className="form-control"
              type="text"
              name="Producto"
            />
            <br />

            <label>Cantidad</label>
            <input
              className="form-control"
              type="text"
              name="Cantidad"
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          >
            Insertar
          </button>
          <button
            className="btn btn-danger"
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
