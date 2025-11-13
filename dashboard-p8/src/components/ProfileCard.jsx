function ProfileCard({ view, setView }) {
  return (
    <div className="profile-card">
      <div className="profile-card__top">
        <div className="profile-card__avatar">
          {/* Якщо є реальне фото – можеш вставити <img /> */}
          <span>ШМ</span>
        </div>
        <div className="profile-card__info">
          <p className="profile-card__label">Резюме для</p>
          <h1 className="profile-card__name">Шевченко Марко</h1>
        </div>
      </div>

      <div className="profile-card__bottom">
        <button
          className={`profile-card__view-btn ${
            view === "daily" ? "profile-card__view-btn--active" : ""
          }`}
          onClick={() => setView("daily")}
        >
          Daily
        </button>
        <button
          className={`profile-card__view-btn ${
            view === "weekly" ? "profile-card__view-btn--active" : ""
          }`}
          onClick={() => setView("weekly")}
        >
          Weekly
        </button>
        {/* Якщо треба ще Monthly — можна легко додати */}
      </div>
    </div>
  );
}

export default ProfileCard;
