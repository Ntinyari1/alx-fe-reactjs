import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter'; // 1. Import Counter

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      
      {/* 2. Add Counter component */}
      <Counter />

      <MainContent />
      <Footer />
    </>
  );
}

export default App;