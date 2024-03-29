import Head from "next/head";
const kalia = {};
export default function Meta(props: {}) {
  return (
    <div>
      <Head>
        <body className="primary-color">
          <meta charSet="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no,initial-scale=1.0"
          />
          <title>Rajesh Store</title>
          <meta name="description" itemProp="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </body>
      </Head>
    </div>
  );
}
