// Games.js
import React, { useState } from "react";
import "../styles/Games.css";

function Games() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingGames = [
    {
      teams: "Lebanon vs Syria",
      date: "May 28, 2026",
      time: "4:45 PM",
      location: "Manara",
    },
    {
      teams: "Sagesse vs Lebanon",
      date: "May 30, 2026",
      time: "9:45 PM",
      location: "Ghazir",
    },
  ];

  const resultsGames = [
    {
      teams: "BC Astana vs Lebanon",
      date: "Dec 10, 2025",
      location: "Saryarka Velodrome",
      score: "BC Astana 86 – Lebanon 72",
    },
    {
      teams: "Lebanon vs Central",
      date: "Dec 6, 2025",
      location: "Manara",
      score: "Lebanon 85 – Central 74",
    },
    {
      teams: "Lebanon vs Homenetmen",
      date: "May, 24, 2026",
      location: "Mezher",
      score: "Lebanon 125 – Homenetmen 126",
    },
  ];

  return (
    <div className="games-page">
      <nav className="tabs">
        <button
          className={activeTab === "upcoming" ? "tab active" : "tab"}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={activeTab === "results" ? "tab active" : "tab"}
          onClick={() => setActiveTab("results")}
        >
          Results
        </button>
      </nav>

      <section className="games">
        {activeTab === "upcoming" &&
          upcomingGames.map((game, index) => (
            <div className="game-card" key={index}>
              <div className="teams">{game.teams}</div>
              <div className="details">
                <p>Date: {game.date}</p>
                <p>Time: {game.time}</p>
                <p>Location: {game.location}</p>
              </div>
            </div>
          ))}

        {activeTab === "results" &&
          resultsGames.map((game, index) => (
            <div className="game-card" key={index}>
              <div className="teams">{game.teams}</div>
              <div className="details">
                <p>Date: {game.date}</p>
                <p>Location: {game.location}</p>
                <p>Score: {game.score}</p>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}

export default Games;