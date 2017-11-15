import React from 'react'
import {
  Button
} from 'react-bootstrap'

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>Did you get here via Redux?</p>
    <Button bsStyle="primary">Filter: CT</Button>
  </div>
)

export default Home