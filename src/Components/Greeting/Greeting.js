import React, { useState, useEffect } from 'react';
import './Greeting.css';

function Greeting() {

    const [currentGreeting, changeGreeting] = useState("Hello")

    useEffect(() => {setTimeout(() => {
        if (currentGreeting === "Hello") changeGreeting("Bonjour")
        else if (currentGreeting === "Bonjour") changeGreeting("Hola")
        else if (currentGreeting === "Hola") changeGreeting("Ciao")
        else if (currentGreeting === "Ciao") changeGreeting("Привет")
        else if (currentGreeting === "Привет") changeGreeting("Hello")
    }, 1200)
}, [currentGreeting])

    return (
        <div className='greeting'>
            {currentGreeting}
        </div>
    );
}

export default Greeting;
