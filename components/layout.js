import Footer from './footer';
import NavBar from './navbar';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>
        {children}
      </div>
      <Footer />
    </>
  );
}
