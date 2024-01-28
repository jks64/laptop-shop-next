import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 font-sans h-screen  overflow-hidden">
      <div className="max-w-screen-md mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
        <h1 className="text-blue-500 text-3xl">Компанія: LTop</h1>

        <div className="mt-6">
          <p className="text-gray-700">Номер Телефона: +380 (97) 327-95-21</p>
          <p className="text-gray-700">
            Адреса: м.Вінниця, вул. Келецька 100, Вінниця, Україна
          </p>
          <p className="text-gray-700">Email: gorobec71@gmail.com</p>
          <p className="text-gray-700">Viber: 0973279521</p>
        </div>

        <p className="mt-6 text-gray-900 leading-6">
          Компанія LTop займається продажем якісних ноутбуків, що купуються на
          вторинному ринку США та Європи. Ноутбуки, які ми привозимо набагато
          дешевше за нові з такими ж характеристиками, при цьому вони сучасні та
          потужні. Привізні ноутбуки проходять професійне технічне
          обслуговування та повністю готові до роботи. Крім того, купівля б/у
          ноутбука допомагає зменшити кількість електронних відходів та сприяє
          екологічній стійкості.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
