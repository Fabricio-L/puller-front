import { useState, useMemo } from 'react'

const useFetchProductId = (id) => {
  const [product, setProduct] = useState(null)

  useMemo(async () => {
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
  }, [id])

  return {
    product,
  }
}

export default useFetchProductId
