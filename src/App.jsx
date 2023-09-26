import { RouterProvider } from "react-router-dom";
import router from "./Route/Router";

function App() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
