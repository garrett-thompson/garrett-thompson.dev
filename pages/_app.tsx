import "../dist/styles.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { CardPage } from "../components/page-carousel/card-page";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <CardPage key={router.asPath}>
        <Component {...pageProps} />
      </CardPage>
    </AnimatePresence>
  );
}

export default MyApp;
