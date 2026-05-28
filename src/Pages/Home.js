import React from "react"; 
import '../styles/Home.css';
import news from "../Img/news.jpg"; 

const Home = () => {
  return (
    <div className="Home">
      <div className="section news">
        <h2>Latest News</h2>

        <div className="news-item">
          <img src={news} alt="Ismail" />
          <h3>اللاعب المصري المُجنس اسماعيل أحمد يُعلن انضمامه لمنتخب لبنان</h3>
          <p>April 19, 2026</p>
        </div>

        <div className="news-item">
          <h3>The Lebanese Club boost top-seed hopes after repeating over Gorgan</h3>
          <p>Feb 22, 2026</p>
        </div>

        <div className="news-item">
          <h3>الفريق اللبناني يهزم مضيفه فريق المعهد الأنطوني ويعزز سلسلة انتصاراته بالصدارة</h3>
          <p>Feb 15, 2026</p>
        </div>

        <div className="news-item">
          <h3>Total domination as the Lebanese club snuff Astana’s five-game streak</h3>
          <p>March 12, 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
