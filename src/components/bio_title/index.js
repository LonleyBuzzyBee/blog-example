import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Bio_title = (props) => {
  return (
      <div className="container-jumbotron">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-4"><ion-icon  className="about_bio_section_icon" name="help-circle-outline"></ion-icon>Phasellus viverra begin?</h1>
          
          </Container>
        </Jumbotron>
      </div>

  );
};

export default Bio_title;