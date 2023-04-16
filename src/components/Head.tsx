import Head from "next/head";
import { HeadProps } from "../interfaces/HeadProps"

export function HeadTag({title, content}: HeadProps) {
  return (
    
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={content}/>
        <meta name="author" content="Jean Luiz" />
        <meta name="author" content="zatzk" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <meta property="og:site_name" content="zatzk's portfolio" />
        <meta name="og:title" content="zatzk's portfolio" />
        <meta property="og:type" content="website" />
        <title>{`zatzk's portfolio - ${title}`}</title>
      </Head>
  )
}