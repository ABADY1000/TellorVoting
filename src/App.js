import React, { useState, useContext } from "react";
//Router
import { BrowserRouter as Router } from "react-router-dom";
//Components
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
//Web3
import { ethers } from "ethers";
//Context
import { AppContext } from "./index";

function App() {
  //Component State
  const [currAddr, setCurrAddr] = useState("");
  const [signer, setSigner] = useState({});
  //Context
  const data = useContext(AppContext);
  //Globals
  //Listening for changes in ChainId (Mainnet/Rinkeby/Others)
  window.ethereum.on("chainChanged", () => {
    window.location.reload();
  });
  //Listening for changes in Metamask Accounts
  window.ethereum.on("accountsChanged", (accounts) => {
    setCurrAddr(ethers.utils.getAddress(accounts[0]));
    const signerFromProvider = data.provider.getSigner();
    setSigner(signerFromProvider);
  });

  // TODO: Move 'link' later to header tag
  return (
    <div className="App">
      <Router>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
        <Nav currAddr={currAddr} />
        <Hero currAddr={currAddr} signer={signer} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
