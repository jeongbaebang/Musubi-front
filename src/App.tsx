import { Route, Routes } from "react-router-dom";

import { SignIn, SignUp } from "@/page/auth";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
