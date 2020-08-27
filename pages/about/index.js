import Router from 'next/router'
import Head from 'next/head'
import {MainLayout} from '../../layouts/MainLayout'

export default function About() {
    const postsHandler = () => {
        Router.push('/posts')
    }
return <MainLayout title={'About page'}>

    <h1>About</h1>
    <em>Два варианта вызвова роутинга</em>
    <button onClick={()=> Router.push('/')}>Go back to home</button>
    <button onClick={postsHandler}>Go Posts Page</button>
</MainLayout>
}
