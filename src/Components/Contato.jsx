import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from './Head'

const Contato = () => {
    return (
        <section className={`${styles.contato} anime-left`}>
            <Head title="Contato" content="Página de contatos"/>
            <img src={foto} alt="Contato" />
            <div>
                <h1>Entre em contato</h1>
                <ul className={styles.dados}>
                    <li>rrricardo00@yahoo.com.br</li>
                    <li>19 9999-9999</li>
                    <li>Rua Aqui Dá Ban</li>
                </ul>
            </div>
        </section>
    )
}

export default Contato