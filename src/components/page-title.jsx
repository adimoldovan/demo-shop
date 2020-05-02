import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default class PageTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.page_title
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="subheader-container">
              <h1>
                <small className="text-muted">{this.state.title}</small>
              </h1>
            </div>
            <hr/>
          </Col>
        </Row>
      </Container>
    )
  }
}
