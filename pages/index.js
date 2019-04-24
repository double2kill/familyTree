import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import App from '../src/App'
import { Button, message } from 'antd';

const Home = class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  handleClick = () => {
    message.info('This is a normal message');
  }

  render() {
    return (
      <div>
        <Head />
        <App></App>
      </div>
    )
  }
}

export default Home
