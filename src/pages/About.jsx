import React from "react";


function About() {
  return (
    <div className="about-container">
      <h1>About us</h1>
      <p>
        Welcome to BiteBook Recipes App. BiteBook is your personal recipe app,
        designed exclusively for you to explore and save all your favorite
        delicious meals. With a wide range of yummy recipes at your fingertips,
        you'll find everything from quick snacks to elaborate dinners, tailored
        to your tastes and preferences. The app allows you to easily browse
        through various categories, mark your favorite recipes, edit and delete
        recipes as well. With BiteBook, cooking becomes a delightful and
        personalized experience, helping you discover new flavors and perfect
        your culinary skills. Enjoy your cooking journey!
      </p>

      <h4>Developers</h4>
      <div className="developers">
        {/* Richard */}
        <div className="developer-card">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQF6qasEuwfkUA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722372171693?e=1749686400&v=beta&t=tvj2LA3gMNjNP6kinYhZMWjhz06MWc2h8Ld9zV_IzOg"
            alt="Richard Nixon"
            className="profile-img"
          />
          <p>Richard Nixon</p>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/richardnixondev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔵 LinkedIn
          </a>
        </div>

        {/* Kainat */}
        <div className="developer-card">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQGmCjoT_KOxJg/profile-displayphoto-shrink_400_400/B4EZRuyutkGwAg-/0/1737025580538?e=1749686400&v=beta&t=PMgA5EVKjoAx0LHwJ__cbyJeNF9-acCn4meIj5a_9yQ"
            alt="Kainat Naseer"
            className="profile-img"
          />
          <p>Kainat Naseer</p>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/kainat-naseer-523845285//"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔵 LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
