import React from "react";
import carbody from '../images/mainimages/img1.png';
import sign from '../images/mainimages/img2.png';
import card1 from '../images/mainimages/img1-top-aero1.jpg';
import card2 from '../images/mainimages/img2-top-aero1.jpg';
import card3 from '../images/mainimages/img3-top-aero1.jpg';
import {Col, Row,} from "react-bootstrap";
function Body(){
    return(
        <div className="bodyone">
            <h1 className="history">HISTORY
                <div className="overtext">
                    <h1>WELCOME TO</h1>
                    <p>AERO CAR STORE</p>
                </div>
            </h1>
            <Row className="carpart">
                <Col xxl={4} xl={6} md={6} sm={12}>
                    <img
                        src={carbody}
                        class="img-fluid rounded-top"
                        alt="bodypart" />
                </Col>
                <Col xxl={4} xl={6} md={6} sm={12}>
                    <div className="carbodyText">
                        <h3>MEET OUR</h3>
                        <h1>CAR CLUB SINCE 1892</h1>
                        <h6>CUSTOME AND CLUB</h6>
                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                        <h5>Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</h5>
                        <h2>JOHN DOE - CEO AERO</h2>
                        <img
                            src={sign}
                            class="img-fluid rounded-top"
                            alt=""
                        />
                    </div>
                </Col>
            </Row>
            <Row className="cardmain">
            <Col xxl={4} xl={4} md={4} sm={12} className="cardcol">
                <img
                    src={card1}
                    class="img-fluid rounded-top"
                    alt=""/>
                    <div className="cardtext">
                        <p>NEW COLLECTION</p>
                        <h1>NEW TRENDING 2018-2016</h1>
                        <h3>SALE UPTO 20% OFF</h3>
                    </div>
            </Col>
            <Col xxl={4} xl={4} md={4} sm={12} className="cardcol">
                <img
                    src={card2}
                    class="img-fluid rounded-top"
                    alt=""/>
                    <div className="cardtext">
                        <p>NEW COLLECTION</p>
                        <h1>NEW TRENDING 2018-2016</h1>
                        <h3>SALE UPTO 20% OFF</h3>
                    </div>
            </Col>
            <Col xxl={4} xl={4} md={4} sm={12} className="cardcol">
                <img
                    src={card3}
                    class="img-fluid rounded-top"
                    alt=""/>
                    <div className="cardtext">
                        <p>NEW COLLECTION</p>
                        <h1>NEW TRENDING 2018-2016</h1>
                        <h3>SALE UPTO 20% OFF</h3>
                    </div>
            </Col>
            </Row>
        </div>
    )
}

export default Body