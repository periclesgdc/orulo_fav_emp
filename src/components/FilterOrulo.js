import React, { Component } from 'react';
import { Card, Form, InputGroup, Button, Row, Col } from 'react-bootstrap';

export default class FilterOrulo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opportunities: [
        {'client': 'Cliente'},
        {'broker': 'corretor'},
        {'exchange_units': 'Dação'}
      ],
      disableArea: true
    }
  }

  loadCities = (city) => {
    console.log(city)
  }

  render() {
    return(
      <Card className="p-3">
        <Form>
          <InputGroup className="sm-3">
            <InputGroup.Prepend size="sm">
              <InputGroup.Text id="city">Cidade</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Ex.: Belo Horizonte, MG"
              onKeyUp={this.loadCities.bind(this)}
            />
          </InputGroup>

          <Form.Group controlId="formBasicArea">
            <Form.Label size="sm">Bairro</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Informe o bairo" disabled={this.state.disableArea} />
          </Form.Group>

          <Form.Group as={Row} controlId="formBasicOpportunity">
            <Col sm="5">
              <Form.Label size="sm">Oportunidade para</Form.Label>
              <div key="default-checkbox" className="mb-3">
                {this.state.opportunities.map(obj => (
                  <Form.Check
                    size="sm"
                    type={"checkbox"}
                    name={Object.keys(obj)[0]}
                    id={Object.keys(obj)[0]}
                    label={Object.values(obj)[0]}
                  />
                ))}
              </div>
            </Col>
          </Form.Group>

          <Form.Group controlId="formBasicOpportunity">
            <Form.Label size="sm">Status do empreendimento</Form.Label>
            <Form.Control size="sm" as="select">
              <option value="under_construction">Em construção</option>
              <option value="ready">Construído</option>
              <option value="used">Usado</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicFinality">
            <Form.Label size="sm">Finalidade do empreendimento</Form.Label>
            <Form.Control size="sm" as="select">
              <option value="comercial">Comercial</option>
              <option value="residencial">Residencial</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicType">
            <Form.Label size="sm">Tipo do imóvel</Form.Label>
            <Form.Control size="sm" as="select">
              <option value="tipo">tipo</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicBedroom">
            <Form.Label size="sm">Quantidade de quartos</Form.Label>
            <Form.Control size="sm" as="select">
              <option value="quantidade">quantidade</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" size="sm">
            Submit
          </Button>
        </Form>
      </Card>
    );
  }
}
