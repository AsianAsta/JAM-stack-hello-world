import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>My name is Sam. I am looking forward to participate my first ever hackathon! Woohoo~</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
