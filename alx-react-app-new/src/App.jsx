import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile'; // 1. Import UserProfile

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage />
      
      {/* 2. Use UserProfile with props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />

      <MainContent />
      <Footer />
    </>
  );
}

export default App;