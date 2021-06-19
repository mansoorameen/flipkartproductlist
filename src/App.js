
import './App.css';
import { Filters } from './components/filters/Filters';
import { Header } from './components/header/Header';
import './Images'
import Images from './Images';




function App() {


  return (
    <div className="App">
      <Header />
      <Filters />
     <div className="head">
      <h2>Clothing And Accessories</h2><small>(Showing 1 – 40 products of 1,00,987 products)</small>
     </div>
     <div className="sort">
       <p>Sort by</p>
       <a>Popularity</a>
        <a>Price - Low to High</a>
        <a>Price - High to Low</a>
        <a>Newest First</a>
     </div>
     <div className="products">
     { Images.map(({id, src}) => <img key={id} src={src} />)}
      
     </div>
    </div>
  );
}

export default App;
