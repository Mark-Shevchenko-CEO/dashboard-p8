// Можна завести мапу кольорів по title,
// щоб фон картки збігався з Figma
const bgColors = {
  Work: "card--work",
  Play: "card--play",
  Study: "card--study",
  Exercise: "card--exercise",
  Social: "card--social",
  "Self Care": "card--selfcare"
};

function getPreviousLabel(view) {
  if (view === "daily") return "Yesterday";
  if (view === "weekly") return "Last Week";
  return "Previous";
}

function ActivityCard({ title, data, view }) {
  const wrapperClass = `activity-card ${bgColors[title] || ""}`;
  const previousLabel = getPreviousLabel(view);

  return (
    <article className={wrapperClass}>
      <div className="activity-card__inner">
        <header className="activity-card__header">
          <h2 className="activity-card__title">{title}</h2>
          <span className="activity-card__dots">•••</span>
        </header>

        <div className="activity-card__body">
          <p className="activity-card__current">{data.current}hrs</p>
          <p className="activity-card__previous">
            {previousLabel} – {data.previous}hrs
          </p>
        </div>
      </div>
    </article>
  );
}

export default ActivityCard;
