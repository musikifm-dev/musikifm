'use strict';

module.exports = {
  podcastReport: async () => {
    try {
      // fetching the data
      // we dont really need contentSections for this example.
      // its kept here, just for your reference
      const entries = await strapi.entityService.findMany('api::podcast.podcast', {
        fields: ['id', 'title','description','src','homepage'],
        populate: {
          image: {
            populate: {
              attributes:{
                fields: ["url"],
              },
            },
          }
        }
      });

      // reducing the data to a simple array
      let entriesReduced;
      if (entries && Array.isArray(entries)) {
        entriesReduced = entries.reduce((acc, item) => {
          acc = acc || [];
          console.log(acc);
          acc.push({
            id: item.id,
            title: item.title || '',
            description: item.description,
            image: item.image.url,
            src: item.src,
            homepage: item.homepage
          });
          return acc;
        }, [])

        // returning the reduced data
        return entriesReduced;
      }
    } catch (err) {
      return err;
    }
  }
}