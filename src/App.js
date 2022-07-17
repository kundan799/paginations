import Users from "./Components/users/Users";
import VideoPlayer from "./Components/video/Video";
import "./styles.css";
import data from "./utils/data.json";


export default function App() {
  return (
    <div className="App">
      <VideoPlayer />
      <Users />
    </div>
  );
}
