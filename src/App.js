import Header from "./pages/Landing/Header";
import Navbar from "./components/Navbar/Navbar";

import Showcase from "./pages/ShowCase/Showcase";
import Services from "./pages/Services/Services";
import History from "./pages/History/History";
import Footer from "./pages/Footer/Footer";
import Partners from "./pages/Partners/Partners";

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Showcase />
      <Services />
      <History />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
