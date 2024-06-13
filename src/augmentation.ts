import type {
	Emphasis,
	AttributeCommand
} from './index';

declare module '@ckeditor/ckeditor5-core' {
	interface PluginsMap {
		[ Emphasis.pluginName ]: Emphasis;
	}

	interface CommandsMap {
		emphasis: AttributeCommand;
	}
}
