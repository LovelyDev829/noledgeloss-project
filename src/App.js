import "./App.css";
import NavigationMenu from "./components/NavigationMenu";
// import Footer from './components/Footer';
import Header from "./components/Header";
import TimeLine from "./components/TimeLine";

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationMenu />
      <TimeLine/>
    </div>
  );
}

export default App;
