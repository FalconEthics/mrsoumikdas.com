/**
 * The main App component that wraps all other components.
 * @param {Object} props - The props object containing Component and pageProps.
 * @returns {JSX.Element} - The JSX element representing the App component.
 */
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/app";
import { useEffect, useState } from "react";
import PageLoader from "./components/PageLoader";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const pageKey = router.asPath;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <AnimatePresence initial={false} mode="popLayout">
      {loading ? <PageLoader size={300} /> : <Component {...pageProps} />}
    </AnimatePresence>
  );
}
