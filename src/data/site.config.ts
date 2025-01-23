interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	author: 'Your Name', // Site author
	title: 'Julyflower', // Site title.
	description: 'Nhi già con địt thúi =)))', // Description to display in the meta tags
	lang: 'en-us', // Language for the site
	ogLocale: 'en_us',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
