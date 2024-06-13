
import { Plugin } from 'ckeditor5/src/core';
import EmphasisEditing from './emphasis/emphasisediting';
import EmphasisUI from './emphasis/emphasisui';

export default class Emphasis extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get requires() {
		return [ EmphasisEditing, EmphasisUI ] as const;
	}

	/**
	 * @inheritDoc
	 */
	public static get pluginName() {
		return 'Emphasis' as const;
	}
}
