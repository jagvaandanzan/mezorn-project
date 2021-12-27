import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      className="App h-[60rem]"
      style={{
        background: `linear-gradient(to bottom right, #4a4a4a 30%, #797979`,
      }}
    >
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
