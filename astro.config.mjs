// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// plugins
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			plugins: [
				starlightSidebarTopics([
					{
						label: 'Guides',
						icon: 'book',
						link: '/guides/',
						items: [
							{ label: 'Operating Systems', autogenerate: { directory: 'guides/os/' } },
							{ label: 'Database Management Systems', autogenerate: { directory: 'guides/dbms/' } },
						]
					}
				]),
			]
		}),
	],
});
