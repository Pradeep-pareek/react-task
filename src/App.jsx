import Header from "./components/Header";
import Step from "./components/step";
import Table from "./components/Table";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <div className="w-full mx-auto py-[25px]">
          <Step/>
         <Table/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
