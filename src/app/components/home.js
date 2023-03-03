import Content from "./content";

import Header from "./header";

function Home() {
  const status = false;
  return (
    <div>
      <Header online={status} />
      <Content />
    </div>
  );
}
export default Home;
