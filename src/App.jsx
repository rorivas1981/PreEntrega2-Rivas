import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />
    </div>
  );
}

export default App;


