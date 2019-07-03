import { FunctionComponent, LazyExoticComponent } from "react"
import { HomePage, NotFoundPage, SEOPage, ConfigurationPage, RSSPage, ContentPage, ArchivesPage, PostsPage } from "./pages"

interface RouteConfigItem {
	key?: string
	path: string
	component: FunctionComponent | LazyExoticComponent<FunctionComponent>
}

let id = 0

const routes: RouteConfigItem[] = [
	{
		path: "/",
		component: HomePage
	},
	{
		path: "/seo",
		component: SEOPage
	},
	{
		path: "/configuration",
		component: ConfigurationPage
	},
	{
		path: "/rss",
		component: RSSPage
	},
	{
		path: "/content",
		component: ContentPage
	},
	{
		path: "/archives",
		component: ArchivesPage
	},
	{
		path: "/posts",
		component: PostsPage
	},
	{
		path: "/404",
		component: NotFoundPage
	}
]

routes.forEach(r => {
	r.key = ++ id + ""
})

export default routes
