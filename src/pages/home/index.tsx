import type { NextPage } from "next"
import Head from "next/head"
import homes from "../../../data/homes.json"
import Property from "../../components/Property"
import styles from "../../styles/Home.module.css"

const PropertyListings: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className="font-sans text-3xl underline">Home Page</div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10 justify-between">
        <div className="flex flex-col lg:flex-row justify-between">
          {homes.map((home) => {
            return <Property home={home} />
          })}
        </div>
      </main>
    </div>
  )
}

export default PropertyListings
