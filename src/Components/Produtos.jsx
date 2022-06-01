import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import styles from './Produtos.module.css'

const Produtos = () => {

  const [produtos, setProdutos] = React.useState(null)

  React.useEffect(() => {
    axios.get(process.env.URL)
      .then(res => {
        setProdutos(res.data)
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  if (produtos === null) return null

  return (
    <section className={`${styles.produtos} anime-left`}>
      <Head title="Produtos" content="Página de produtos" />
      {produtos.map((produto) => {
        return (
          <Link to={`produto/${produto.id}`} key={produto.id}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            <h1 className={styles.nome}>{produto.nome}</h1>
          </Link>
        )
      })}
    </section>
  )
}

export default Produtos