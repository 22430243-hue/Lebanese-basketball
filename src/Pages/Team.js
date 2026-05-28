import React from "react";
import "../styles/Team.css";
import teamphoto from "../Img/team.jpeg"; 

function Players() {
  const players = [
    {
      number: 1,
      name: "ISMAIL AHMAD",
      position: "Forward-Center",
      nationality: "Lebanon, Egypt",
      flag: "🇱🇧",
      height: "2.05 m",
      age: "50 years",
    },
    {
      number: 5,
      name: "AMIR SAOUD",
      position: "Shooting Guard",
      nationality: "Lebanon",
      flag: "🇱🇧",
      height: "1.86 m",
      weight: "83 Kg",
      age: "35 years",
    },
    {
      number: 6,
      name: "KARIM ABOU NASR",
      position: "Guard",
      nationality: "Lebanon",
      flag: "🇱🇧",
      height: "1.95 m",
      age: "20 years",
    },
    {
      number: 7,
      name: "KARIM ZEINOUN",
      position: "Guard",
      nationality: "Lebanon",
      flag: "🇱🇧",
      height: "1.88 m",
      weight: "79 Kg",
      age: "27 years",
    },
    {
      number: 20,
      name: "HABIB ABDALLAH",
      position: "Forward",
      nationality: "Lebanon",
      flag: "🇱🇧",
      height: "1.95 m",
      age: "33 years",
    },
    {
      number: 22,
      name: "YOUSSEF GHANTOUS",
      position: "Guard",
      nationality: "Lebanon",
      flag: "🇱🇧",
      height: "1.88 m",
      age: "30 years",
    },
    {
      number: 24,
      name: "HAYK GYOKCHYAN",
      position: "Forward",
      nationality: "Lebanon",
      flag: "🇱🇧",
      height: "2.03 m",
      age: "36 years",
    },
    {
      number: 94,
      name: "MARCUS GEORGES-HUNT",
      position: "Guard",
      nationality: "United States",
      flag: "🇺🇸",
      height: "1.98 m",
      weight: "100 Kg",
      age: "32 years",
    },
  ];

  const coaches = [
    { name: "Ahmad Farran", role: "Coach", nationality: "Lebanon", flag: "🇱🇧" },
    { name: "Ahmad Yamout", role: "First Assistant Coach", nationality: "Lebanon", flag: "🇱🇧" },
    { name: "Jovan Gorec", role: "Second Assistant Coach", nationality: "Serbia", flag: "🇷🇸" },
  ];

  const staff = [
    { name: "Walid Yamout", role: "Team Manager", nationality: "Lebanon", flag: "🇱🇧" },
    { name: "Rony Mosleh", role: "Physiotherapist", nationality: "Lebanon", flag: "🇱🇧" },
    { name: "Tony Abou Atmeh", role: "Physical Trainer", nationality: "Lebanon", flag: "🇱🇧" },
  ];

  return (
    <div className="players-page">
      <div className="team-image">
        <img src={teamphoto} alt="The Lebanese Team" />
      </div>

      <h2>Players</h2>
      <div className="player-list">
        {players.map((player, index) => (
          <div className="player-card" key={index}>
            <div className="player-info">
              <h4>{player.number} - {player.name}</h4>
              <p>{player.position} {player.flag} {player.nationality}</p>
              <p>
                {player.height}
                {player.weight ? ` • ${player.weight}` : ""} • {player.age}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h3>Coaches</h3>
      <div className="coach-list">
        {coaches.map((coach, index) => (
          <div className="coach-card" key={index}>
            <h4>{coach.name}</h4>
            <p>{coach.role} {coach.flag} {coach.nationality}</p>
          </div>
        ))}
      </div>

      <h3>Staff</h3>
      <div className="staff-list">
        {staff.map((member, index) => (
          <div className="staff-card" key={index}>
            <h4>{member.name}</h4>
            <p>{member.role} {member.flag} {member.nationality}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Players;