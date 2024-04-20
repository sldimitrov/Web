// React Hook - regular functions that MUST be call only inside COMPONENETS
import { useState } from 'react';
import { CORE_CONCEPTS } from "./data.js";
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  // Hooks - MUST be called on the TOP-LEVEL  &  and they should NOT BE NESTED
  const [ selectedTopic, setSelectedTopic ] = useState()
 
  function handleSelect(selectedButton) {
    // selectedButton => 'componenets', 'jsx', 'props', 'state' 
    setSelectedTopic(selectedButton);
  } 

  // console.log('APP COMPONENT EXECUTING')
  
  let tabContent = 'Please chose a topic!';

  if (selectedTopic) {
    tabContent = (
      <section id='tab-content'>
        <h3>{ EXAMPLES[selectedTopic].title }</h3>
        <p>{ EXAMPLES[selectedTopic].description }</p>
        <pre>
          <code>
            { EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </section>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id="examples">
          <main>
            <h3>Examples</h3>
            <menu>
              <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>
                Components
              </TabButton>
              <TabButton isSelected={selectedTopic ==='jsx'} onSelect={() => handleSelect('jsx')}>
                JSX
              </TabButton>
              <TabButton isSelected={selectedTopic ==='props'} onSelect={() => handleSelect('props')}>
                Props
              </TabButton>
              <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>
                State
              </TabButton>
            </menu>
            {tabContent}
          </main>
        </section>
      </main>
    </div>
  );
}

export default App;
