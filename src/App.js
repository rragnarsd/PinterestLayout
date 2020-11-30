import './App.css';
import Cards from './components/Cards';
import cards from './components/Data';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='background'>
      <Navbar />
      <div className='container'>
        {cards.map((card) => (
          <Cards
            key={card.id}
            title={card.title}
            name={card.name}
            pins={card.pins}
            img={card.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
