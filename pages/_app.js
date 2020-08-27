// import '../styles/globals.css'
// import '../styles/Home.module.css'
import '../styles/index.scss'
//функция для оценки скорости рендеринга
export function reportWebVitals(metric) {
    console.log(metric.value / 1000, 'seconds')
}

export default function MyApp({Component, pageProps}) {
return <>
    <Component {...pageProps}/>
    </>
}
