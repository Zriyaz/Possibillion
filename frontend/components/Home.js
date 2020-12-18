import Head from "next/head"
import {getHeadData} from "./utils"

const Home = ({headerData}) =>{

    const head = () =>(
        <Head>
            <title>
                {headerData.siteName} | {headerData.siteCreator}
            </title>
            <meta name="description" content={`online examination by ${headerData.description}`} />
            <meta property="og:title" content={`${headerData.title}| ${headerData.siteCreator}`} />
            <meta property="og:description" content={`online examination by ${headerData.siteName}`} />
            <meta property="og:type" content={headerData.type} />
            <link rel="canonical" href={headerData.image} />
            <meta property="og:locale" content="en-US" />
            <meta property="og:url" content={headerData.url} />
            <meta property="og:site_name" content={headerData.siteName} />
            <meta property="twitter:name" content={headerData.siteName} />
            <meta property="twitter:url" content={headerData.url} />
            <meta property="twitter:description" content={headerData.description} />
            <meta property="twitter:image" content={headerData.image} />
        </Head>
    );

    console.log(headerData)
    return(
        <div>
            {head()}
          <h1 style={{textAlign: 'center'}}>NextJS With Dynamic SEO Page</h1>
        </div>
    )
} 

Home.getInitialProps = ()=>{
    return getHeadData().then(data=>{
        if(data.error){
            console.log(data.error)
        }else{
            return{
                headerData: data.seoData[0]
            }
        }
    })
}

export default Home