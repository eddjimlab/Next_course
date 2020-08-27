import Link from 'next/link'
import Head from 'next/head'
export function MainLayout({children, title = 'NextApp'}) {
    return (
        <>
            <Head>
                <title>{title} | Next Course</title>
                <meta name="description" content="this is beautiful Next js app"/>
                <meta name="keywords" content="если нужны ключевые слова"/>
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
            main {
            margin-top: 80px;
            padding: 2rem;
            }
            nav {
            position: fixed;
            height: 60px;
            left: 0;
            top: 0;
            right: 0;
            background: darkblue;
            display: flex;
            justify-content: left;
            align-items: center;
            
            }
            nav a {
            color: #fff;
            margin-left: 10px;
            }
            `}</style>
        </>
    )
}
