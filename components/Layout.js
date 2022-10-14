import Head from "next/head";
import Header from "./Header";
function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
      </Head>
      <Header />
      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: "ZCyrpto Setting the foundation for a sustainable future",
  description: "Best Crypto",
  keywords: "crypto,blockchain,NFT",
};
export default Layout;
