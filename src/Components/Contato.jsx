import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'

const Contato = () => {
    return (
        <section className={styles.contato}>
            <img src={foto} alt="Contato" />
            <div>
                <h1>Entre em contato</h1>
                <ul>
                    <li>rrricardo00@yahoo.com.br</li>
                    <li>19 9999-9999</li>
                    <li>Rua Aqui Dá Ban</li>
                </ul>
            </div>
        </section>
    )
}

export default Contato