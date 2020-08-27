import Link from 'next/link'
import {MainLayout} from '../layouts/MainLayout'
import dynamic from 'next/dynamic'

export default function Index() {
    const Dynamic = dynamic(
        () => import('./dynamic'),
        {loading: () => <p>loading content ...</p>}
    )
    return (<MainLayout title={'Home Page'}>
        <h1>Hello Next.js</h1>
        <em>Оба вариант создания линков одинаковы</em>

        <p>Стилиловать можно прямо в шаблоне в тэге style</p>
        <p>При этом стили применяются только локально</p>
        <code> style jsx </code>
        <p>Но если хотим глобально: </p>
        <code> style jsx global</code>
        <hr/>
        <h4>_Document.js</h4>
        <p>При создании файла <em className="text-danger">_document.js</em> нужно учитывать, что после добавления линков
            нужно
            <mark> перезагрузить проект</mark></p>
        <p>Линки загружаем сюда</p>
        <h4>_app.js</h4>
        <p>А сюда загружаем ссылки на файлы ситилей, либо здесь можно прописать jsx global</p>
        <hr/>
        <h4>Preprocessors like SASS</h4>
        <p>Поддерживатются из коробки, нужно только установить <code>npm install sass</code></p>
        <p>И затем перименовать все файлы в <code>scss</code></p>
        <hr/>
        <h4>404 Page</h4>
        <p>Кастомизировать страницу просто: нужно создать <code>404.js</code> и затем уже ее стилизовать</p>
        <hr/>
        <h4>getInitialProps</h4>
        <p>Считается устаревшим, но работает хорошо. И позволяет сочетать рендеринг на фронте и бэке</p>
        <p>Для этих целей есть еще метод с пакетом <code><a target="_blank" href={'https://nextjs.org/docs/basic-features/data-fetching'}>swr</a></code></p>
        <p>getStaticProps & getServerSideProps работают только при работе на бэкенде и не могут сочетаться с фетчем на
            фронтенде</p>
        <hr/>
        <h4>Package.json</h4>
        <p>Для одновременного запуска фронта и бэка и используется пакет: <code><a target="_blank" href="https://www.npmjs.com/package/concurrently">concurrently</a></code></p>
        <p>Скрипты: </p>
        <p><code>"mock": "json-server -w db.json -p 4200 -d 1000",</code></p>
        <p><code>"serve": "concurrently \"npm run dev\" \"npm run mock\"",</code></p>
        <hr/>
        <Dynamic/>
        <hr/>
        <h4>Loading Environment Variables</h4>
        <p><code><a href="https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables">.env.local</a></code></p>
        <p>Не однозначно выдает ошибки</p>
        <p>Удалось сделать только совместив <code>.env.local</code> и <code>next.config.js</code></p>


        <p><Link href={'/about'}><a>About</a></Link></p>
        <p><Link href='/posts'><a>Posts</a></Link></p>
    </MainLayout>)
}
