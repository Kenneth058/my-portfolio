import * as React from 'react'
import Head from 'next/head'

export interface Props {
  children: React.ReactNode
}

const MainLayout: React.FunctionComponent<Props> = ({ children }) => (
  <div className="bg-black-1 min-h-screen">
    <Head>
      <title>Kenneth Chévez</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
)

export default MainLayout
