import React from "react";

function About() {
  return (
    <div className="about-container p-8 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-center mb-6">
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

      <h4 className="text-2xl font-semibold text-center mb-6">Developers</h4>

      <div className="flex flex-col gap-8 sm:flex-row sm:justify-center sm:gap-12">
        {/* Richard */}
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQF6qasEuwfkUA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722372171693?e=1749686400&v=beta&t=tvj2LA3gMNjNP6kinYhZMWjhz06MWc2h8Ld9zV_IzOg"
            alt="Richard Nixon"
            className="h-32 w-32 rounded-full object-cover"
          />
          <div className="text-center sm:text-left">
            <p className="text-xl font-semibold text-gray-800">Richard Nixon</p>
            <p className="font-medium text-gray-500">Developer</p>
            <a
              className="text-purple-600 hover:text-purple-800"
              href="https://www.linkedin.com/in/richardnixondev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔵 LinkedIn
            </a>
          </div>
        </div>

        {/* Kainat */}
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQGmCjoT_KOxJg/profile-displayphoto-shrink_400_400/B4EZRuyutkGwAg-/0/1737025580538?e=1749686400&v=beta&t=PMgA5EVKjoAx0LHwJ__cbyJeNF9-acCn4meIj5a_9yQ"
            alt="Kainat Naseer"
            className="h-32 w-32 rounded-full object-cover"
          />
          <div className="text-center sm:text-left">
            <p className="text-xl font-semibold text-gray-800">Kainat Naseer</p>
            <p className="font-medium text-gray-500">Developer</p>
            <a
              className="text-purple-600 hover:text-purple-800"
              href="https://www.linkedin.com/in/kainat-naseer-523845285//"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔵 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
