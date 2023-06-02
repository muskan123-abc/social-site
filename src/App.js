import "./App.css";
import UserTab from "./component/userview/UserTab";
import UserChat from "./component/userview/UserChat";
import Status from "./component/userview/Status";

function App() {
  return (
    <>
      <div className="flex h-screen p-5 bg-dark">
        <UserTab />
        <UserChat />
      </div>
      {/* <Status /> */}
    </>
  );
}

export default App;
