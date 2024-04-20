import { useState } from 'react';

import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import { EXAMPLES } from '../data.js'

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState()
 
    function handleSelect(selectedButton) {
      // selectedButton => 'componenets', 'jsx', 'props', 'state' 
      setSelectedTopic(selectedButton);
    } 
      
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
    return(
        <Section title="Examples" id="examples">
        <Tabs 
          ButtonsContainer="menu"
          buttons={
          <>
            <TabButton 
                isSelected={selectedTopic === 'components'} 
                onSelect={() => handleSelect('components')}
            >
            Components
            </TabButton>
            <TabButton 
                isSelected={selectedTopic ==='jsx'} 
                onSelect={() => handleSelect('jsx')}
            >
            JSX
            </TabButton>
            <TabButton 
                isSelected={selectedTopic ==='props'} 
                onSelect={() => handleSelect('props')}
            >
            Props
            </TabButton>
            <TabButton 
                isSelected={selectedTopic === 'state'} 
                onSelect={() => handleSelect('state')}
            >
            State
            </TabButton>
          </>}>
            {tabContent}
            </Tabs>
    </Section>
    )
}