'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bulkThemeParks = await queryInterface.bulkInsert("themeParks", [
      {
        name: 'Disneyland Park',
        city: 'Anaheim',
        state: 'CA',
        country: 'USA',
        website: 'https://disneyland.disney.go.com/',
        operatingCompany: 'The Walt Disney Company',
        openingDate: '1955-07-17',
        status: true,
        about: "Disneyland Park, originally Disneyland, is the first of two theme parks built at the Disneyland Resort in Anaheim, California, opened on July 17, 1955. It is the only theme park designed and built to completion under the direct supervision of Walt Disney. It was originally the only attraction on the property; its official name was changed to Disneyland Park to distinguish it from the expanding complex in the 1990s. It was the first Disney theme park. Walt Disney came up with the concept of Disneyland after visiting various amusement parks with his daughters in the 1930s and 1940s. He initially envisioned building a tourist attraction adjacent to his studios in Burbank to entertain fans who wished to visit; however, he soon realized that the proposed site was too small. After hiring a consultant to help him determine an appropriate site for his project, Disney bought a 160-acre site near Anaheim in 1953. Construction began in 1954 and the park was unveiled during a special televised press event on the ABC Television Network on July 17, 1955.Since its opening, Disneyland has undergone expansions and major renovations, including the addition of New Orleans Square in 1966, Bear Country (now Critter Country) in 1972, Mickey's Toontown in 1993, and Star Wars: Galaxy's Edge in 2019. Opened in 2001, Disney California Adventure Park was built on the site of Disneyland's original parking lot. Disneyland has a larger cumulative attendance than any other theme park in the world, with 726 million visits since it opened (as of December 2018). In 2018, the park had approximately 18.6 million visits, making it the second most visited amusement park in the world that year, behind only Magic Kingdom, the very park it inspired. According to a March 2005 Disney report, 65,700 jobs are supported by the Disneyland Resort, including about 20,000 direct Disney employees and 3,800 third-party employees (independent contractors or their employees)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Disney California Adventure Park',
        city: 'Anaheim',
        state: 'CA',
        country: 'USA',
        website: "https://disneyland.disney.go.com/",
        operatingCompany: 'The Walt Disney Company',
        openingDate: '2001-02-08',
        status: true,
        about: "Disney California Adventure Park is a theme park located in Anaheim, California. The 72-acre park is themed after the history and culture of California, which celebrates the fun and adventure of the state through the use of various Disney, Pixar and Marvel properties. The park opened on February 8, 2001 as Disney's California Adventure Park or Disney's California Adventure, and it is the second of two theme parks built at the Disneyland Resort complex, after Disneyland Park. The concept of a theme park dedicated to California arose from a meeting of Disney executives in 1995, following the cancellation of WestCOT, a planned West Coast version of Walt Disney World's utopian EPCOT Center. Construction of the park began in June 1998 and was completed by early 2001. Disney initially projected high attendance rates at the new park; however, a series of preview openings held in January 2001 led to negative reviews, and after the park officially opened to the public on February 8, 2001, the company's attendance projections were never met. Disney spent the next several years incrementally adding new rides, shows, and attractions, and implementing other promotions aimed at boosting attendance. In 2007, Disney announced a major expansion of the park as well as a major overhaul of a significant portion of the park. Construction lasted for five years and was completed in stages, culminating with the opening of Buena Vista Street and Cars Land in June 2012. According to the Themed Entertainment Association, the park hosted approximately 9.9 million guests in 2018, making it the 12th-most visited theme park in the world that year.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Universal Studios Hollywood',
        city: 'Universal City',
        state: 'CA',
        country: 'USA',
        website: "https://www.universalstudioshollywood.com/web/en/us",
        operatingCompany: 'NBCUniversal (Comcast)',
        openingDate: '1964-07-15',
        status: true,
        about: "Universal Studios Hollywood is a film studio and theme park in the San Fernando Valley area of Los Angeles County, California. About 70% of the studio lies within the unincorporated county island known as Universal City while the rest lies within the city limits of Los Angeles, California. It is one of the oldest and most famous Hollywood film studios still in use. Its official marketing headline is 'The Entertainment Capital of LA'. It was initially created to offer tours of the real Universal Studios sets and is the first of many full-fledged Universal Studios Theme Parks located across the world. Outside the theme park, a new, all-digital facility near the Universal Pictures backlot was built in an effort to merge all of NBCUniversal's West Coast operations into one area. As a result, the current home for KNBC, KVEA and NBC News with Noticias Telemundo Los Angeles Bureaus with new digital facility is on the Universal lot formerly occupied by Technicolor SA. Universal City includes hotels Universal Hilton & Towers, the Sheraton Universal Hotel, and Universal CityWalk, which offers a collection of shops, restaurants, an 18-screen Universal Cinema and a seven-story IMAX theater. In 2017, the park hosted 9.056 million guests, ranking it 15th in the world and 9th among North American parks.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Knott's Berry Farm",
        city: 'Buena Park',
        state: 'CA',
        country: 'USA',
        website: "https://www.knotts.com/",
        operatingCompany: 'Cedar Fair Entertainment Company',
        openingDate: '1920-01-01',
        status: true,
        about: "Knott's Berry Farm is a 57-acre theme park located in Buena Park, California, owned and operated by Cedar Fair. In 2018, it was the twelfth-most-visited theme park in North America and averages approximately 4 million visitors per year. The park features 40 rides including roller coasters, family rides, dark rides and water rides. The theme park began in the 1920s as a road-side berry stand run by Walter Knott along State Route 39 in California. By the 1940s, a restaurant, several shops, and other attractions had been constructed on the property to entertain a growing number of visitors, including a replica ghost town. The site continued its transformation into a modern amusement park over the next two decades, and an admission charge was added in 1968. In 1997 the park was sold to Cedar Fair for $300 million, just two years after the Knott's food business was acquired by Conagra, Inc. in 1995.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Legoland California",
        city: 'Carlsbad',
        state: 'CA',
        country: 'USA',
        website: "https://www.legoland.com/california/",
        operatingCompany: 'Merlin Entertainments',
        openingDate: '1999-03-20',
        status: true,
        about: "Legoland California Resort is a theme park, miniature park, and aquarium located in Carlsbad, California, based on the Lego toy brand. Opening on March 20, 1999, it was the third Legoland park to open, and the first outside Europe. The park is currently owned by Merlin Entertainments, which took a controlling interest in 2005. A second park in the United States, Legoland Florida, opened in 2011.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "SeaWorld San Diego",
        city: 'San Diego',
        state: 'CA',
        country: 'USA',
        website: "https://seaworld.com/san-diego/",
        operatingCompany: 'SeaWorld Parks & Entertainment',
        openingDate: '1964-03-21',
        status: true,
        about: "SeaWorld San Diego is an animal theme park, oceanarium, outside aquarium and marine mammal park, in San Diego, California, United States, inside Mission Bay Park. SeaWorld San Diego is a member of the Association of Zoos and Aquariums (AZA). Adjacent to the property is the Hubbs-SeaWorld Research Institute, which conducts research on marine biology and provides education and outreach on marine issues to the general public, including information in park exhibits.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    console.log('bulk insert: ', bulkThemeParks)
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
