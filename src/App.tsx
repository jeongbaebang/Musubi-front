import { Route, Routes } from "react-router-dom";

import { Home } from "@/page/Home";
import { SignIn, SignUp } from "@/page/auth";
import { Layout } from "@/components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
