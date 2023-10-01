import React from "react";
import './../styles/App.css';
import Tabs from './Tabs';

const App = () => {
  const tabs = [
    {
      title: 'Tab 1',
      content: <p>This is the content for Tab 1.</p>,
    },
    {
      title: 'Tab 2',
      content: <p>This is the content for Tab 2.</p>,
    },
    {
      title: 'Tab 3',
      content: <p>This is the content for Tab 3.</p>,
    },
  ];

  return (
    <div>
      <h1>Tabs Example</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;