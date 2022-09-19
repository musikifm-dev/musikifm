'use strict';

module.exports = {
  videoReport: async () => {
    try {
      // fetching the data
      // we dont really need contentSections for this example.
      // its kept here, just for your reference
      const entries = await strapi.entityService.findMany('api::video.video', {
        fields: ['id', 'title','content','url','homepage','tag'],
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
            content: item.content,
            url: item.url,
            homepage: item.homepage,
            image: item.image.url,
            tag : item.tag
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