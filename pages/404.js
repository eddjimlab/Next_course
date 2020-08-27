import {MainLayout} from '../layouts/MainLayout'
import Link from 'next/dist/client/link'
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
return <MainLayout>
    <h1 className={classes.error}>404 Page</h1>
    <p>This page could not be found</p>
    <p>Return to <Link href={'/'}><a>home page</a></Link> please</p>
</MainLayout>
}
