import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "../styles.css";

const App = ({ Component, pageProps }) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
