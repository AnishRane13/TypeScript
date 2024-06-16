import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import Section from "./components/Section";

import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title={"Nope"} />
      <Section title={"Anish"} />
      <Counter setCount={setCount}> Count is {count}</Counter>
      <List items={["Coffee", "Tocos", "Code"]} render={(item:string) => <span className="bold">{item}</span>}/>
    </>
  );
}

export default App;
