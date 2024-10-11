import React from 'react'

export default function Select() {
  return (
    <section className='container-fluid' style={{
        width:'100%',
        height:'60dvh',
        display:'grid',
        placeItems:'center',
    }}>
        <div style={{textAlign:'center'}}>
        <h1>No Product Selected</h1>
        <p>Select any Product from Shop</p>
        </div>
    </section>
  )
}
