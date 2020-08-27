import {MainLayout} from '../../layouts/MainLayout'

export default function Author() {
return <MainLayout title={'author page'}>
    <h1>Author</h1>
    <p>Страницы и роуты можно создавать разными способами</p>
    <p>Данный пример вынесения в отдельную папку, где должен быть "корневой" index.js для этой папки</p>
    <p>А остатльные будут подроутами этого роута; как author.js</p>
</MainLayout>
}
