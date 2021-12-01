import Head from "next/head";


export default function GeneralHead(props) {


  return (
    <Head>
      <title>{props.title}</title>
      <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-touch-icon.png"/>
      <link rel="icon" sizes="16x16" href="/images/icons/favicon-16x16.ico"/>
      <link rel="icon" sizes="32x32" href="/images/icons/favicon-32x32.ico"/>
      <link rel="icon" sizes="96x96" href="/images/icons/favicon-96x96.ico"/>
      <link rel="manifest" href="/images/icons/site.webmanifest"/>
      <link rel="mask-icon" href="/images/icons/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
      {props.children}
    </Head>
  )
}
