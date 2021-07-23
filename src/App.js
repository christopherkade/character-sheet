import Page from 'components/Page'

import './App.css';

import config from "static/config.json"

function App() {
  console.log('CONFIG', config)

  return (
    <div className="wrapper">
      <Page config={config} />
    </div>
  );
}

export default App;
