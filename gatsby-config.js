module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
	{
		resolve: "gatsby-plugin-manifest",
		options: {
			name: "PWA Gatsby",
			short_name: "PWA Gatsby",
			start_url: "/",
			background_color: "#f7f0eb",
			theme_color: "#a2466c",
			display: "standalone",
			icon: "src/images/icon.png",
		},
	},
	"gatsby-plugin-offline",
	{
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};