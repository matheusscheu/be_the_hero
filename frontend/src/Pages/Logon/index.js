import React from 'react';
import {FiLogIn} from 'react-icons/fi'

import './style.css'

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    return (
        <div className = 'logon-container'>
            <section className='Form'>
                <img src={logoImg} alt="Be the Hero"/>

                <form>
                    <h1>
                        Faça seu logon
                    </h1>
                    <input placeholder='Sua ID'/>
                    <button type='submit'>Entrar</button>

                    <a href='/register'>
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </a>
                </form>
                
            </section>
            <img src = {heroesImg} alt= 'Heroes'/>
        </div>
    )
}