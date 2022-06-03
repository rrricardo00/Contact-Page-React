import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import Head from './Head'
import styles from './Produto.module.css'

const Produto = () => {

  const [load, setLoad] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [produto, setProduto] = React.useState(null)

  const { id } = useParams()

  React.useEffect(() => {
    const getProduct = async () => {
      try {
        setLoad(false)
        const response = await axios.get(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
        setProduto(response.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoad(true)
      }
    }
    getProduct()
  }, [id])

  if (!load) return <h3>Loading</h3> 
  if (error) return <h3>Aconeceu um erro: {error}</h3>
  if (produto === null) return <h3>Loading</h3>

  return (
    <section className='anime-left'>
      <Head title={`Produto | ${produto.nome}`} content={`Página do produto ${produto.nome}`}/>
      {load &&
        <div className={`${styles.produto}`} >
          {produto.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.titulo} />)}
          <h1> {produto.nome}</h1>
          <span className={styles.preco}>R$ {produto.preco}</span>
          <p className={styles.descricao}>{produto.descricao}</p>
        </div>
      }
    </section>
  )
}

export default Produto