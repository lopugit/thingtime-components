// Generate a local acceptance fixture inside the Thingtime checkout. These
// generated files are local-only; exclude remix/.functional-preview/ in Git.
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { buildCatalog } from './lib/catalog.mjs';
if (!process.env.THINGTIME_SOURCE) throw new Error('Set THINGTIME_SOURCE');
const out = path.join(process.env.THINGTIME_SOURCE, 'remix/.functional-preview');
await mkdir(out, { recursive: true });
const { definitions } = await buildCatalog();
await writeFile(path.join(out, 'catalog.json'), JSON.stringify(definitions));
await writeFile(path.join(out, 'index.html'), '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>[LC] Catalog acceptance</title></head><body><div id="root"></div><script type="module" src="./preview.tsx"></script></body></html>');
await writeFile(path.join(out, 'preview.tsx'), `
import React from 'react';
import {createRoot} from 'react-dom/client';
import {ChakraProvider} from '@chakra-ui/react';
import {createMemoryRouter,RouterProvider} from 'react-router';
import {ThingtimeProvider} from '../app/Providers/ThingtimeProvider';
import {WebpageBlocksRenderer} from '../app/components/Builder/WebpageBlocksRenderer';
import definitions from './catalog.json';
function Preview(){
 const [slug,setSlug]=React.useState(definitions[0].slug);
 const [gallery,setGallery]=React.useState(false);
 const def=definitions.find(d=>d.slug===slug)!;
 const list=gallery?definitions.filter(d=>d.library===def.library):[def];
 return <main style={{maxWidth:960,margin:'auto',padding:16}}><h1>Functional catalog acceptance</h1>
 <label>Component<select aria-label="Component" value={slug} onChange={e=>setSlug(e.target.value)} style={{width:'100%'}}>{definitions.map(d=><option key={d.slug} value={d.slug}>{d.slug}</option>)}</select></label>
 <label><input type="checkbox" checked={gallery} onChange={e=>setGallery(e.target.checked)}/>Show this design's 350 families</label>
 {list.map(d=><section key={d.slug} aria-label={d.slug} style={{marginTop:24,padding:16,border:'1px solid #ddd',minWidth:0,overflowWrap:'anywhere'}}><h2>{d.slug}</h2><WebpageBlocksRenderer interactive blocks={[{id:d.slug,type:'component',component:d.slug}]} componentsByRef={{[d.slug]:{id:d.slug,crystal:d}}}/></section>)}</main>
}
const router=createMemoryRouter([{id:'root',path:'*',loader:()=>({user:null}),Component:()=> <ChakraProvider><ThingtimeProvider storageKey="functional-catalog-preview" persistLocal={false} exposeGlobals={false}><Preview/></ThingtimeProvider></ChakraProvider>}]);
const root=createRoot(document.getElementById('root')!);root.render(<RouterProvider router={router}/>);import.meta.hot?.dispose(()=>root.unmount());
`);
console.log(`Wrote ${definitions.length} definitions and acceptance fixture to ${out}`);
