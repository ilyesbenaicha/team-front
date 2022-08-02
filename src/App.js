import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
//import 'index.css'
import { getMonth } from "./util";
const App = () => {
  console.table(getMonth(6))
  const routing = useRoutes(Themeroutes);

  return <div className="dark">{routing}</div>;
};

export default App;
