import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{`${title} | My Dibs!`}</title>
      <meta name="description" content="나만의 쇼핑 찜 리스트!" />
    </Head>
  );
}
