import Main from '../templates/home/Main'
import useFetchProducts from '../hooks/useFetchProducts'

const Home = () => {
  const { products } = useFetchProducts()

  return <Main products={products} />
}

export default Home
