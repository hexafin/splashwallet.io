
import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" href="./static/splash-favicon.png"/>
      <link rel="stylesheet" href="./static/Splash_Avenir.css"/>
      <title>Splash - Let's make crypto easy</title>
       <meta name="description" content="Crypto shouldn't be hard."/>
       <script dangerouslySetInnerHTML={{ __html: `
    window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
      heap.load("2693734839");`}}
</>
    </Head>
  </div>
)

// <link rel="stylesheet" href="https://use.typekit.net/xob8rbo.css"/>
