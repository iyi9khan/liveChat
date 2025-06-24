// import { createBrowserRouter, RouterProvider } from "react-router";
// import Registration from "./pages/Registration";

// const router = createBrowserRouter(
//   [
//     {
//       path: "/registration",
//       element: <Registration />,
//     },
//   ],
//   {
//     basename: "/liveChat/"
//   }
// );

// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;

import { HashRouter, Routes, Route, BrowserRouter } from "react-router";
import Registration from "./pages/Registration";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
