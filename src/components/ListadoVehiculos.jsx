import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const Vehiculos = ({ id, placa, modelo }) =>

    <Row>
        <Col md={4}>

            <Table striped bordered hover size="sm">
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{placa}</td>
                        <td>{modelo}</td>
                    </tr>

                </tbody>
            </Table>
        </Col>
    </Row>
    ;

const RegistroVehiculo = () =>

    <>
        <Col xs={{ order: 'last' }}>First, but last</Col>
    </>


    ;




function TablaListadoVehiculo() {


    const listavehiculos = [
        { id: 1, placa: 'Placa1', modelo: 'Modelo1' },
        { id: 2, placa: 'Placa2', modelo: 'Modelo2' },
        { id: 3, placa: 'Placa3', modelo: 'Modelo3' },
        { id: 4, placa: 'Placa4', modelo: 'Modelo4' }
    ]

    const listadoVehiculo = listado => listavehiculos.map(e => (
        <Vehiculos key={e.id} id={e.id} placa={e.placa} modelo={e.modelo} />

    ));
    return <>

        <Container>
            <Row>
                <Col md={4}>
                    <Table striped bordered hover size="sm">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Placa</th>
                                    <th>Modelo</th>
                                </tr>
                            </thead>

                        </Table>
                    </Table>
                </Col>
            </Row>
            {listadoVehiculo(listavehiculos)}
        </Container>

    </>
}

export default TablaListadoVehiculo;