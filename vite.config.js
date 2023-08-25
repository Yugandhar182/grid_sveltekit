import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			// Specify the paths to DevExtreme CSS files
			scss: {
				additionalData: `@import 'devextreme/dist/css/dx.common.css'; @import 'devextreme/dist/css/dx.light.css';`
			}
		}
	}
});
