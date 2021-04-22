import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPosData} from '../lib/posts'
import {getUsersData} from '../lib/users'

export const getStaticProps = async () => {
  const allPostsData = getSortedPosData() 
  const allUsersData = await getUsersData()
  return {
    props: {
      allUsersData,
      allPostsData
    }
  }
}

export default function Home({allPostsData, allUsersData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Active Users</h2>
        <ul className={utilStyles.list}>
          {allUsersData.map(({ id, name, email }) => (
            <li className={utilStyles.listItem} key={id}>
              <span><h4>Name: </h4>{name}</span>
              <span><h4>Email: </h4>{email}</span>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
