const basePath = '/code_copycats'

module.exports = {
    pathPrefix: basePath,
    siteMetadata: {
        title: `An Account of a Voyage up the River de la Plata (TEI)`,
        description: `This is a project by Team Code Copycats`,
        author: `Alice, Carlos, Julieta & Nery`
    },
    plugins: [
        `gatsby-plugin-material-ui`,
        `gatsby-theme-ceteicean`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `src/content/tei`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `src/content/pages`,
                name: `html`,
            },
        },
    ],
}