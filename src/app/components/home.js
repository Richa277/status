import { createContext } from "react";
import Content from "./content";

import Header from "./header";

export const statusValue = createContext();
function Home() {
  const status = true;
  return (
    <div>
      <statusValue.Provider value={status}>
        <Header />
        <Content />
      </statusValue.Provider>
    </div>
  );
}
export default Home;
