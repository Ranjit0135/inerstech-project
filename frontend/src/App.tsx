import { BrowserRouter as Routes } from "react-router-dom";
import CustomRoutes from "./routing/CustomRoutes";
function App() {
  return (
    <>
      <Routes>
        <CustomRoutes />
      </Routes>
    </>
  );
}

export default App;
