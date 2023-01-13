import { useState, useMemo } from 'react'

const useFetchProducts = () => {
  const [products, setProducts] = useState(null)

  useMemo(async () => {
    await fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json))
  }, [])

  return {
    products,
  }
}

export default useFetchProducts
