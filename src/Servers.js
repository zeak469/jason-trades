
import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
function Servers() {
    return (
        <>
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
        </>
    );
}
export default Servers