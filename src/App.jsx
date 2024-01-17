import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Styles from '../src/App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Listado de todos los productos'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer className={Styles.container} greeting={'Listado de los productos filtrados: '} />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>ERROR 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


