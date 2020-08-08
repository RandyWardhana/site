import Head from 'next/head'

const Meta = ({ description, image, name, site }) => {
    name = name|| 'Randy Wardhana'
    description = description || 'Hi There! I’m Randy Wardhana, a frontend engineer and a weeb'
    image = image || 'https://firebasestorage.googleapis.com/v0/b/site-randy.appspot.com/o/avatar%2Fbandy.png?alt=media&token=ba3bab28-929d-4ec1-acb0-0a25450f656a'
    site = site || 'https://site-randy.vercel.app'

  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name="next-head-count" />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={description} />
      <meta name="theme-color" content='#2F3136' />

      <meta property="og:locale" content="en_US" />
      <meta property='og:title' content={name} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={site} />
      <meta property='og:image' content={image} />
      <meta property='og:image:secure_url' content={image} />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:image:width' content='500' />
      <meta property='og:image:height' content='500' />
      <meta property='og:image:alt' content={name} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={name} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={name} />
      <meta name="twitter:site" content="@randywardhana3" />
      <meta name="twitter:site:id" content="@randywardhana3 " />
      <meta name="twitter:creator" content="@randywardhana3" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="branch:deeplink:$desktop_url" content={site} />
      <meta name="branch:deeplink:$ios_deeplink_path" content={name} />
      <meta name="branch:deeplink:$android_deeplink_path" content={name} />

      <link rel='stylesheet' href='/css/styles.css' />
      <title>{name}</title>
    </Head>
  )
}

export default Meta