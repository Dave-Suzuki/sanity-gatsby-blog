export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6350e46879c1b76f9b68729c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ksaouvwp",
                  apiId: "14219bba-e6f7-4988-8e99-fbd1006bbda8",
                },
                {
                  buildHookId: "6350e469fdfe147201632e6a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-byr2mgbm",
                  apiId: "869080cb-a307-440a-8a89-e828f94f1e6e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Dave-Suzuki/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-byr2mgbm.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
