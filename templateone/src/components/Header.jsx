import React from "react";
import { Col, Row , Form } from "react-bootstrap";

function Header() {
    return (
        <div className="header">
            <Row className="row1">
                <Col xxl={6} xl={6} md={6} sm={12} className="col1">
                    <h1>SEARCH BY YEAR , MAKE , MODEL</h1>
                </Col>
                <Col xxl={6} xl={6} md={6} sm={12} className="col2">
                    <h1>SEARCH BY YEAR , MAKE , MODEL</h1>
                </Col>
            </Row>
            <Row className="mainrow">
                <Col xxl= {3} xl={3} md={3} sm={6} className="colmain">
                    <Form.Select aria-label="Default select example" className="select">
                        <option>Select make</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col xxl= {3} xl={3} md={3} sm={6} className="colmain">
                    <Form.Select aria-label="Default select example" className="select">
                        <option>Select model</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col xxl= {3} xl={3} md={3} sm={6} className="colmain">
                    <Form.Select aria-label="Default select example" className="select">
                        <option>Select Year</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col xxl= {3} xl={3} md={3} sm={6} className="colmain">
                    <button className="btn">Search</button>
                </Col>
                    
            </Row>

        </div>

    );
};

export default Header