import React from 'react'
import { Helmet } from 'react-helmet-async';

function CustomTitle({ title }) {
  return (
    <Helmet>
      <title>{title} | Anaconda</title>
    </Helmet>
  )
}

export default CustomTitle
