import Layout from '../../components/layout'
import Date from '../../components/date'
import {getAllPostIds, getPostsData} from '../../lib/posts'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export const getStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const postData = await getPostsData(params.id)
    return {
        props: {
            postData
        }
    }
}

const Post = ({postData}) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <arcticle>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}/>
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </arcticle>            
        </Layout>
    )
}

export default Post