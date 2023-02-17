import React from "react";
import "../styles.css";

const App = ({ Component, pageProps }) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return <Component {...pageProps} />;
};

export default App;
