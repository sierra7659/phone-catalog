import React from 'react';
import {Navbar} from 'react-bootstrap';

function Page(){

    return (
        <Navbar className="background-navbar text-navbar" variant="dark" fixed="top">
            <Navbar.Brand>
                Phone Catalog
            </Navbar.Brand>
        </Navbar>
    );
}

export default Page;