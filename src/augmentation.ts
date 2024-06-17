import type {
	Emphasis,
	Wavyunderline,
	AttributeCommand
} from './index';

declare module '@ckeditor/ckeditor5-core' {
	interface PluginsMap {
		[ Emphasis.pluginName ]: Emphasis;
		[ Wavyunderline.pluginName ]: Wavyunderline;
	}

	interface CommandsMap {
		emphasis: AttributeCommand;
		wavyunderline: AttributeCommand;
	}
}
