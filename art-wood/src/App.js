import './App.css';
import Header from "./Components/Header/header.jsx";
import Introduction from "./Components/Introduction/introduction.jsx";
import Description from "./Components/Description/description.jsx";
import Contract from "./Components/Contract/contract.jsx";
import Footer from "./Components/Footer/footer.jsx";
import AboutUs from "./Components/AboutUs/about-us.jsx";
import WorkSample from "./Components/Work sample/work-sample.jsx";


function App() {
  return (
    <>
      <Header/>
      <Introduction/>
      <Description/>
      <Contract/>
      <WorkSample/>
      <AboutUs/>
      <Footer/>
    </>

  )
}

export default App;
