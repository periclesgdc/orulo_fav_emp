import React, { Component } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

export default class FilterOrulo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opportunities: [
        {'client': 'Cliente'},
        {'broker': 'corretor'},
        {'exchange_units': 'Dação'}
      ],
    }
  }

  render() {
    return(
      <Card className="p-3">
        <Form>
          <Form.Group controlId="formBasicCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="text" placeholder="Ex.: Belo Horizonte, MG" />
          </Form.Group>

          <Form.Group controlId="formBasicArea">
            <Form.Label>Bairro</Form.Label>
            <Form.Control type="text" placeholder="Informe o bairo" />
          </Form.Group>

          <Form.Group controlId="formBasicOpportunity">
            <Form.Label>Oportunidade para</Form.Label>
            <div key="default-checkbox" className="mb-3">
              {this.state.opportunities.map(obj => {
                <Form.Check
                  type={"checkbox"}
                  /* id={Object.keys(obj)[0]}
                  label={Object.values(obj)[0]} */
                />
              })}
            </div>
            <Form.Control as="select">
              <option value="client">Cliente</option>
              <option value="broker">Corretor</option>
              <option value="exchange_units">Dação</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicOpportunity">
            <Form.Label>Status do empreendimento</Form.Label>
            <Form.Control as="select">
              <option value="under_construction">Em construção</option>
              <option value="ready">Construído</option>
              <option value="used">Usado</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicFinality">
            <Form.Label>Finalidade do empreendimento</Form.Label>
            <Form.Control as="select">
              <option value="comercial">Comercial</option>
              <option value="residencial">Residencial</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicType">
            <Form.Label>Tipo do imóvel</Form.Label>
            <Form.Control as="select">
              <option value="tipo">tipo</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicBedroom">
            <Form.Label>Quantidade de quartos</Form.Label>
            <Form.Control as="select">
              <option value="quantidade">quantidade</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    );
  }
}
