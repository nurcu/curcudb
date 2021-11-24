import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CreatePosition from "./components/create-position.component";
import EditPosition from "./components/edit-position.component";
import PositionList from "./components/position-list.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-position"} className="nav-link">
                React MERN Stack App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-position"} className="nav-link">
                  Create Position
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/edit-position/:id"} className="nav-link">
                  Edit Position
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/position-list"} className="nav-link">
                  Position List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Routes>
                <Route exact path='/' component={CreatePosition} />
                <Route path="/create-position" component={CreatePosition} />
                <Route path="/edit-position/:id" component={EditPosition} />
                <Route path="/position-list" component={PositionList} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;