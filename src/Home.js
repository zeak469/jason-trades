import React from 'react';
import Image from 'react-bootstrap/Image'
import logo from "./logo.svg";
function Home(){
    return (
        <Image src={logo} thumbnail />
    );
}
export default Home