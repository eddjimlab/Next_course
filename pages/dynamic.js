
export default function DynamicComponent() {
return <>
<h2>This is a Dynamic Component</h2>
    <p>It is loading with: </p>
    <code><a target="_blank" href="https://nextjs.org/docs/advanced-features/dynamic-import#with-custom-loading-component">import dynamic from 'next/dynamic'</a></code>
    <code><pre>{`const Dynamic = dynamic( () => import('./dynamic'), {loading: () => <p>loading content ...</p>}
        )`}</pre>
    </code>

</>
}
