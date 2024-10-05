import "./globals.css"; // Import your global CSS or styles
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Amarnath | Portfolio",
  description: "A portfolio of Amarnath",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="background">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
