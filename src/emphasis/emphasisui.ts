
import { Plugin } from 'ckeditor5/src/core';
import { ButtonView, MenuBarMenuListItemButtonView } from 'ckeditor5/src/ui';
import { getButtonCreator } from '../utils';
import emphasisIcon from '../../theme/icons/emphasis.svg';

const EMPHASIS = 'emphasis';

/**
 * The emphasis UI feature. It introduces the Emphasis button.
 */
export default class EmphasisUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get pluginName() {
		return 'EmphasisUI' as const;
	}

	/**
	 * @inheritDoc
	 */
	public init(): void {
		const editor = this.editor;
		const t = editor.locale.t;
		const command = editor.commands.get( EMPHASIS )!;
		const createButton = getButtonCreator( {
			editor,
			commandName: EMPHASIS,
			plugin: this,
			icon: emphasisIcon,
			label: t( 'Emphasis' ),
			keystroke: 'CTRL+E'
		} );

		// Add emphasis button to feature components.
		editor.ui.componentFactory.add( EMPHASIS, () => {
			const buttonView = createButton( ButtonView );

			buttonView.set( {
				tooltip: true
			} );

			buttonView.bind( 'isOn' ).to( command, 'value' );

			return buttonView;
		} );

		editor.ui.componentFactory.add( 'menuBar:' + EMPHASIS, () => {
			return createButton( MenuBarMenuListItemButtonView );
		} );
	}
}
