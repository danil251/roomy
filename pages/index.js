
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Guide from "../components/Guide/Guide";
import Service from "../components/Service/Service";
import Choice from "../components/Choice/Choice";
import Advertising from "../components/Advertising/Advertising";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Search/>
        <Guide/>
        <Service/>
        <Choice/>
        <Advertising/>
        <Footer/>
      </div>
    </div>
  )
}
