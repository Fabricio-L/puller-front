import React from 'react'

const Showcase = (props) => {
  const { products } = props

  return <div>{products && products.map((p) => <div>{p.title}</div>)}</div>
}

export default Showcase
