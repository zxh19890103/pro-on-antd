interface MenuItem {
	url: string
	title: string
	icon?: string
}

const menu: { items: MenuItem[] } = {
	items: [
		{
			url: "/",
			title: "Home",
			icon: "home"
		},
		{
			url: "/seo",
			title: "SEO",
			icon: "global"
		},
		{
			url: "/configuration",
			title: "Configuration",
			icon: "setting"
		},
		{
			url: "/posts",
			title: "Posts",
			icon: "file"
		},
		{
			url: "/content",
			title: "Content",
			icon: "folder"
		},
		{
			url: "/rss",
			title: "RSS",
			icon: "share-alt"
		},
		{
			url: "/archives",
			title: "Archives",
			icon: "paper-clip"
		}
	]
}

export default menu
