import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
//!css dosyaları doğrudan import edilir. export edilmelerine gerek yoktur.
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
