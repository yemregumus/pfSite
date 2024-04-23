import { Card, Col, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const WhiteRabbit = ({ textSequence, rabbitSrc }) => {
  return (
    <Card className="bg-dark text-white card-main mb-1" style={{ minHeight: "250px" }}>
      <Card.Body>
        <Row>
          <Col md={8} className="d-md-block">
            <div className="d-flex flex-column h-100">
              <div className="text-left mb-2">
                <TypeAnimation
                  sequence={textSequence}
                  speed={{ type: "keyStrokeDelayInMs", value: 20 }}
                  cursor={true}
                  wrapper={"p"}
                  repeat={Infinity} // Repeats indefinitely
                  onComplete={() => {}}
                  className="green-text d-md-inline-block text-md"
                />
              </div>
            </div>
          </Col>
          <Col md={4} className="d-md-block">
            <div className="white-rabbit-animation mb-2">
              <Image width={100} height={100} src={rabbitSrc} alt="White Rabbit" />
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WhiteRabbit;
