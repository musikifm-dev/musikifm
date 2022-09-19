module.exports = {
    "custom-api": {
      enabled: true,
    },
    comments: {
      enabled: true,
      config: {
        badWords: false,
        moderatorRoles: ["Authenticated"],
        approvalFlow: ["api::page.page"],
        entryLabel: {
          "*": ["Title", "title", "Name", "name", "Subject", "subject"],
          "api::page.page": ["MyField"],
        },
        reportReasons: {
          MY_CUSTOM_REASON: "MY_CUSTOM_REASON",
        },
        gql: {
          // ...
        },
      },
    }
  };
