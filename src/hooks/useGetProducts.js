import { useState, useMemo } from 'react'

const useGetProducts = (id) => {
  const [products, setProducts] = useState(null)
  const [product, setProduct] = useState(null)

  useMemo(async () => {
    await fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json))
  }, [])

  useMemo(async () => {
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
  }, [id])

  return {
    products,
    product,
  }
}

export default useGetProducts
