import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header.tsx'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Polaweb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      {Header}

      {/* Feed */}

      {/* Modal */}
    </div>
  )
}

export default Home
