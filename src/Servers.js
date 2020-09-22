
import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
function Servers() {
    return (
        <>
            <Container fluid>                
                <Row>
                    <Alert variant="primary">
                        <Alert.Heading>Did you know we host a TF2 Server?</Alert.Heading>
                        <p>
                        Click below to join in all the fun. We have no random crits, a large pool of fun filled maps, and a cool server host!
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                        </div>
                    <Button href="steam://connect/prohunter69trades.com:27015">Connect</Button>
                    </Alert>
                </Row>
            </Container>
        </>
    );
}
export default Servers