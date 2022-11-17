import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Roadmap from "./components/sections/Roadmap";
import Faq from "./components/sections/Faq";
import Mint from "./components/sections/Mint";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";
import {light} from "./styles/Themes";
import {ThemeProvider} from "styled-components";
import {getDefaultWallets, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import '@rainbow-me/rainbowkit/styles.css';

import {chain, configureChains, createClient, WagmiConfig} from "wagmi";
import {alchemyProvider} from "wagmi/providers/alchemy";

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const {chains, provider} = configureChains(
    [chain.mainnet],
    [alchemyProvider({apiKey: "HzH9yF5U4oRr7pd5vZqLg9FPrj6HwsAt"})]
);
const {connectors} = getDefaultWallets({
    appName: "My World Cup App",
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
});

function App() {
    return (
        <main>
            <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider chains={chains}>
                    <ToastContainer />
                    <GlobalStyles/>
                    <ThemeProvider theme={light}>
                        <Navigation/>
                        <Home/>
                        <About/>
                        <Roadmap/>
                        <Mint/>
                        <Faq/>
                        <Footer/>
                        <ScrollToTop/>{" "}
                    </ThemeProvider>
                </RainbowKitProvider>
            </WagmiConfig>

        </main>
    );
}

export default App;
