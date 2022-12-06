import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Polaweb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
    </div>
  )
}

export default Home
