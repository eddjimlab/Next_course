import {MainLayout} from '../../layouts/MainLayout'
import Link from 'next/dist/client/link'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

export default function Post({post: serverPost}) {
    const [post, setPost] = useState(serverPost)
    const router = useRouter()

   useEffect(() => {
       async function load() {
           const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
           const data = await response.json()
           setPost(data)
       }
       if(!serverPost) {
           load()
       }
   }, [])

    if(!post) {
        return <MainLayout>
            <p>Loading...</p>
        </MainLayout>
    }
    return <MainLayout>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={'/posts'}><a>Back to all Posts</a></Link>
        </MainLayout>
}

Post.getInitialProps = async ({query, res}) => {
    if(!res) {
        return {post:null}
    }

    const response = await fetch(`${process.env.API_URL}/posts/${query.id}`)
    const post = await response.json()
    return {
        post
    }
}

