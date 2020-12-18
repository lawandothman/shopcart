import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProdcuctScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

const App = () => (
  <Router>
    <Header />
    <main className='py-3'>
      <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProdcuctScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
      </Container>
    </main>
    <Footer />
  </Router>
)

export default App
