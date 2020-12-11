'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bulkCreatives = await queryInterface.bulkInsert("creatives", [
      {
        name: "Scott Trowbridge",
        status: true,
        about: "Scott Trowbridge is an American entertainment creator currently serving as Portfolio Creative Executive for Walt Disney Imagineering, the design and production division for Disney Parks, Experiences and Products; a division of the Walt Disney Company. Before Disney, Trowbridge was active in film and theatre production, and held leadership roles within Universal Creative, the design and development arm of Universal Parks and Resorts. In 2007, Trowbridge left Universal to join Walt Disney Imagineering to lead Disney's Research & Development division and Blue Sky Creative Studio. In 2015, he started a new studio at Imagineering dedicated to developing Lucasfilm and Star Wars projects.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Joe Rhode",
        status: true,
        about: "Joseph Rohde is a veteran executive at Walt Disney Imagineering, the division of The Walt Disney Company that designs and builds Disney's theme parks and resort hotels. Rohde's formal title is Executive Designer and Vice President, Creative. He was born in Sacramento, California and raised in Hawaii. He graduated from Chaminade College Preparatory, Canoga Park, Calif., in 1973, where he starred in student dramatic productions and was Class Salutatorian. Rohde received a bachelor's degree in Fine Arts from Occidental College in Los Angeles. Rohde's trademark is a large collection of earrings he wears in his left ear, all of which are souvenirs from decades of travel to remote corners of the world. This tradition began when he stuck his 5-year anniversary pin into his ear.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rolly Crump",
        status: false,
        about: "Roland Fargo 'Rolly' Crump (born February 27, 1930) is an American animator and designer noted particularly for his work as a Disney Imagineer. He joined Walt Disney Studios in 1952. Initially he worked on inbetweening, before becoming an assistant animator working on movies including Peter Pan, Lady and the Tramp, Sleeping Beauty, and One Hundred and One Dalmatians. In 1959, he joined WED Enterprises, later Walt Disney Imagineering, and became a designer of some of Disneyland's attractions and shops, including The Haunted Mansion, Enchanted Tiki Room and Adventureland Bazaar. As well as his work at Disney, he designed innovative and satirical psychedelic posters in the early and mid 1960s, including several for the West Coast Pop Art Experimental Band as well as logos for the band's singer Bob Markley. He also designed guitar string packaging for Ernie Ball. He was responsible for designing many of the Disney attractions at the 1964 New York World's Fair, including It's a Small World and in particular the Tower of the Four Winds marquee. In 1966, when the attraction moved to Disneyland, he designed the large animated clock at the entrance that sends puppet children on parade. Crump contributed to early designs of the Magic Kingdom at Walt Disney World in Florida, and worked on designs for NBC's Disney on Parade in 1970, before leaving Disney to work on outside projects including Busch Gardens, the ABC Wildlife Preserve in Maryland, and Ringling Brothers & Barnum and Bailey Circus World. In 1975, Knott's Berry Farm opened Knott's Bear-y Tales, a dark ride designed by Crump. In 1976 he returned to work for Disney, designing the Land and Wonders of Life pavilions at the Epcot Center, before leaving again in 1981 to design the proposed Cousteau Ocean Center in Norfolk, Virginia, and to set up his own business, the Mariposa Design Group, which developed projects in Oman, Las Vegas, Denver and elsewhere. Crump finally returned to Disney in 1992, as executive designer at Imagineering, working on the Epcot Center. He retired from Disney in 1996, and published an autobiography, It’s Kind of a Cute Story, in 2012.",
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
