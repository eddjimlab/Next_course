import {MainLayout} from '../layouts/MainLayout'
import Link from 'next/dist/client/link'
import {useEffect, useState} from 'react'

export default function Posts({posts: serverPosts}) {
    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts`)
            const json = await response.json()
            setPosts(json)
        }

        if (!serverPosts) {
            load()
        }
    }, [])

    if (!posts) {
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    }

    return <MainLayout title={'post page'}>
        <h1>Posts</h1>
        {/*<pre>{JSON.stringify(posts, null, 2)}</pre>*/}
        <ul>
            {posts.map(post => {
                return (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </MainLayout>
}
Posts.getInitialProps = async ({res}) => {
    if (!res) {
        return {posts: null}
    }
    const response = await fetch(`${process.env.API_URL}/posts`)
    const posts = await response.json()
    return {
        posts
    }
}

