import React from "react";
import { Link } from "react-router-dom";

function HomeNavBar() {

    return (
        <>
        <nav>
            <Link to="/beers">All Beers</Link>
            <Link to="/beers/:id">Beer</Link>
            <Link to="/random-beer">Random Beer</Link>
            <Link to="/new-beer">New Beer</Link>
            </nav>
        </>
    )
}

export default HomeNavBar