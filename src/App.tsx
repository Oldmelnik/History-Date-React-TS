import Container from "./components/Container/Container";
import DataContextProvider from "./context/DataContextProvider";

function App() {
  return (
    <DataContextProvider>
      <Container />
    </DataContextProvider>
  );
}

export default App;
