'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bulkAttractions = await queryInterface.bulkInsert("attractions", [
      {
        themeParkId: 1,
        name: "The Haunted Mansion",
        type: "Ride",
        openingDate: "1969-08-09",
        status: true,
        about: "The Haunted Mansion features a ride-through tour in Omnimover vehicles called 'Doom Buggies', and a walk-through show is displayed to riders waiting in the line queue. The attraction utilizes a range of technology, from centuries-old theatrical effects to modern special effects featuring spectral Audio-Animatronics.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      themeParkId: 2,
      name: "Guardians of the Galaxy - Mission: Breakout!",
      type: "Ride",
      openingDate: "2017-05-27",
      status: true,
      about: "Guardians of the Galaxy – Mission: Breakout! is an accelerated drop tower dark ride attraction at Disney California Adventure Park at the Disneyland Resort. Based on the Marvel Comics characters, it depicts Rocket Raccoon recruiting guests to attempt to free the remaining Guardians of the Galaxy from display within the Collector's fortress. It features several cast members from the Marvel Studios film series reprising their characters. While the attraction is inspired by the Marvel Cinematic Universe (MCU), it is instead a part of its own similarly shared universe – Avengers Campus",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      themeParkId: 3,
      name: "Revenge of the Mummy: The Ride",
      type: "Ride",
      openingDate: "2004-06-25",
      status: true,
      about: "Revenge of the Mummy: The Ride, is an enclosed roller coaster located at Universal Studios Hollywood. Its theme is based on The Mummy film franchise, and the ride features linear induction motors (LIMs) that launches riders from standstill to a maximum speed of 40 mph (64 km/h) in a matter of seconds.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      themeParkId: 1,
      name: "Star Wars: Rise of the Resistance",
      type: "Ride",
      openingDate: "2019-01-17",
      status: true,
      about: "Star Wars: Rise of the Resistance is a combined trackless dark ride, walk-through, motion simulator, and drop ride system. It puts guests into the middle of an altercation between the Resistance and the First Order. Featuring four interworking ride systems in conjunction with Audio-Animatronics, practical sets, projection mapping and screen-based media, Rise of the Resistance is one of the most complex and advanced attractions designed by Walt Disney Imagineering.",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
