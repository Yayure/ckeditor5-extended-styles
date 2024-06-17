
import { Plugin } from 'ckeditor5/src/core';
import WavyunderlineEditing from './wavyunderline/wavyunderlineediting';
import WavyunderlineUI from './wavyunderline/wavyunderlineui';

export default class Wavyunderline extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get requires() {
		return [ WavyunderlineEditing, WavyunderlineUI ] as const;
	}

	/**
	 * @inheritDoc
	 */
	public static get pluginName() {
		return 'Wavyunderline' as const;
	}
}
