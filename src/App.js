import Header from './components/Header';
import Logo from './components/Header/Logo';
import Menu from './components/Header/Menu';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header>
        <Logo />
        <Menu />
      </Header>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
