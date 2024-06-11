import type { ExtendedStyles } from './index';

declare module '@ckeditor/ckeditor5-core' {
	interface PluginsMap {
		[ ExtendedStyles.pluginName ]: ExtendedStyles;
	}
}
