import Layout from "../components/Layout";
import { DarkModeProvider } from "../context/DarkModeContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  );
}
