import React from 'react';
import './NavBar.css';
import RakunNegro from './../../images/rakun-negro.jpeg'
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
    return (
        <div>
            <p className='nav-nombre'>Tienda Oficial de Rakun - Indumentaria y productos personalizados</p>
            <ul className='nav'>
                <li><img className='nav-logo' src={RakunNegro} alt="" /></li>
                <li><a href=''>Nosotros</a></li>
                <li><a href=''>Productos</a></li>
                <li><a href=''>Contacto</a></li>
                <li><CartWidget /></li>
            </ul>
        </div>
    );
}

export default NavBar;