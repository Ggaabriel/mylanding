import React from 'react';
import Header from './components/Header';

// bodyColor: "#FAE5D0",
// appaBackground: "#AEA093",
// aangPink: "#F17A76",
// woodColor: "#C57A6B",
// borderColor: "#CEB383",
// textColor: "#1A1918"
function App() {
    const [selectedPage, setSelectedPage] = React.useState<string>("");
  return (
    <div className="App">
        <Header selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
