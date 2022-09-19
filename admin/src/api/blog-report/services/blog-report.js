'use strict';

module.exports = {
  blogReport: async () => {
    try {
      // fetching the data
      // we dont really need contentSections for this example.
      // its kept here, just for your reference
      const entries = await strapi.entityService.findMany('api::blog.blog', {
        fields: ['id', 'title','content','tag','homepage'],
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
            image: item.image.url,
            tag: item.tag,
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