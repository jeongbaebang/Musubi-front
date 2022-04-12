import { Route, Routes } from "react-router-dom";

import { SignIn } from "@/page/auth";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
