import "./App.css";
import UserTab from "./component/userview/UserTab";
import UserChat from './component/userview/UserChat';

function App() {
  return (
    <>
      <div className="flex h-screen p-5">
        <UserTab />
        <UserChat/>
      </div>
    </>
  );
}

export default App;
