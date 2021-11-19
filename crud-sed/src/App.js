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
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [productoSeleccionado, setProductoSeleccionado] = useState({
    id: '',
    Producto: '',
    Cantidad: ''
  });

  const seleccionProducto=(elemento, caso)=>{
    setProductoSeleccionado(elemento);
    (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
    }

  const handleChange=e=>{
    const {name, value}=e.target;
    setProductoSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }  
 
  const editar=()=>{
    var dataNueva=data;
    dataNueva.map(producto=>{
      if(producto.id===productoSeleccionado.id){
        producto.Cantidad=productoSeleccionado.Cantidad;
        producto.Producto=productoSeleccionado.Producto;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }


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
              <td><button className="btn btn-primary" onClick={()=>seleccionProducto(elemento, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" >Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
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
              value={productoSeleccionado && productoSeleccionado.id}
            />
            <br />

            <label>Producto</label>
            <input
              className="form-control"
              type="text"
              name="Producto"
              value={productoSeleccionado && productoSeleccionado.Producto}
              onChange={handleChange}
            />
            <br />

            <label>Cantidad</label>
            <input
              className="form-control"
              type="text"
              name="Cantidad"
              value={productoSeleccionado && productoSeleccionado.Cantidad}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEditar(false)}
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
              value={productoSeleccionado ? productoSeleccionado.Producto: ''}
              onChange={handleChange}
            />
            <br />

            <label>Cantidad</label>
            <input
              className="form-control"
              type="text"
              name="Cantidad"
              value={productoSeleccionado ? productoSeleccionado.Cantidad: ''}
              onChange={handleChange}
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
