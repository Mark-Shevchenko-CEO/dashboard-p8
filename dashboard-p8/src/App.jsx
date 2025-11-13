import { useState } from "react";
import { activities } from "./data";
import ProfileCard from "./components/ProfileCard";
import ActivityCard from "./components/ActivityCard";
import "./index.css";

function App() {
  const [view, setView] = useState("weekly"); // "daily" або "weekly"

  return (
    <div className="app-root">
      <main className="dashboard">
        {/* Ліва панель з профілем */}
        <section className="dashboard-profile">
          <ProfileCard view={view} setView={setView} />
        </section>

        {/* Картки активностей */}
        <section className="dashboard-grid">
          {activities.map((item) => (
            <ActivityCard
              key={item.title}
              title={item.title}
              data={item.timeframes[view]}
              view={view}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
