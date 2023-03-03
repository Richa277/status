import Content from "./content";
import Header from "./header";

function Home() {
  const online = false;
  return (
    <div>
      Home
      <Header online={online} />
      <Content />
    </div>
  );
}
export default Home;
