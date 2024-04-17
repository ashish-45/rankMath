import "./App.scss";
import Header from "./components/header.js";
import Card from "./components/card.js";
import Chart from "./components/chart.js";
import BitcoinCard from "./components/bitcoincard.js";
import Footer from "./components/footer.js";
import Tab from "./components/Tabs.js";

function App() {
  return (
    <div>
      <Header />
      <Card />
      <Tab />
      <Chart />
      <BitcoinCard name="Sell BTC" />
      <Footer />
    </div>
  );
}

export default App;
