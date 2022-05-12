import React, { useContext } from 'react';
import './NavBar.css';
import RakunNegro from './../../images/rakun-negro.jpeg'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/CartContext';

function NavBar(props) {

    const cartC = useContext(CartContext);

    return (
        <div>
            <p className='nav-nombre'>Tienda Oficial de Rakun - Indumentaria y productos personalizados</p>
            <div className='nav'>
                <NavLink to='/'><img className='nav-logo' src={RakunNegro} alt="" /></NavLink>
                <ul className='nav-categoria'>
                    <li><NavLink to='categoria/TAZAS' className={nav => nav.isActive ? 'nav-active' : ''}>Tazas</NavLink></li>
                    <li><NavLink to='categoria/REMERAS_BLANCAS' className={nav => nav.isActive ? 'nav-active' : ''}>Remeras Blancas</NavLink></li>
                    <li><NavLink to='categoria/REMERAS_GRISES' className={nav => nav.isActive ? 'nav-active' : ''}>Remeras Grises</NavLink></li>
                    <li><NavLink to='categoria/REMERAS_RANGLAN' className={nav => nav.isActive ? 'nav-active' : ''}>Remeras Ranglan</NavLink></li>
                </ul>
                <CartWidget />
            </div>
        </div>
    );
}

export default NavBar;