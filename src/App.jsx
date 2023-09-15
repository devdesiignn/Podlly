import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Who from "./components/Who";
import How from "./components/How.jsx";
import Speaker from "./components/Speaker";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Featured />
        <Who />
        <How />
        <Speaker />
        <Banner />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
