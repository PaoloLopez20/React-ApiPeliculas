import ListPeliculas from "./componentes/ListPeliculas";
import './App.css';
import { Natvar } from "./componentes/Natvar";
import { UserProvider } from "./Context/UserContext.js";

function App() {

  return (
    <div >
      <UserProvider>
      <Natvar/>
      <ListPeliculas/>
      </UserProvider>
    </div>
  );
}

export default App;

