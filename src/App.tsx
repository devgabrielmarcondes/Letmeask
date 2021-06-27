import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from "./contexts/AuthContext";

//Não consigo renderizar as duas páginas ao mesmo tempo, por isso utilizaremos o conceito de roteação (navegação).
function App() {
  return (
    //Através do componente Route que passamos as rotas das nossas páginas.
    //O atributo "exact", indica que aquela path precisa ser exatamente aquela passada entre aspas. Este atributo previne que conflitos ocorram ente rotas, no caso, entre Home e NewRoom já que ambas começam com "/".
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
