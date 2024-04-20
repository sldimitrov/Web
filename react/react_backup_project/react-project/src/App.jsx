import Header from './components/Header/Header.jsx';
import CoreConcepts  from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  // Hooks - MUST be called on the TOP-LEVEL  &  and they should NOT BE NESTED
  
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
