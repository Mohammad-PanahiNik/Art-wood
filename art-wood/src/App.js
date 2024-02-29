import './App.css';
import Header from "./Components/Header/header.jsx";
import Introduction from "./Components/Introduction/introduction.jsx";
import Order from "./Components/Order/order.jsx";
import Contract from "./Components/Contract/contract.jsx";
import Footer from "./Components/Footer/footer.jsx";
import AboutUs from "./Components/AboutUs/about-us.jsx";
import WorkSample from "./Components/Work sample/work-sample.jsx";


function App() {
  return (
    <>
      <Header/>
      <Introduction/>
      <Order/>
      <Contract/>
      <WorkSample/>
      <AboutUs/>
      <Footer/>
    </>

  )
}

export default App;
