
import { Plugin } from 'ckeditor5/src/core';
import { ButtonView, MenuBarMenuListItemButtonView } from 'ckeditor5/src/ui';
import { getButtonCreator } from '../utils';
import wavyunderlineIcon from '../../theme/icons/wavyunderline.svg';

const WAVYUNDERLINE = 'wavyunderline';

/**
 * The wavyunderline UI feature. It introduces the Wavyunderline button.
 */
export default class WavyunderlineUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get pluginName() {
		return 'WavyunderlineUI' as const;
	}

	/**
	 * @inheritDoc
	 */
	public init(): void {
		const editor = this.editor;
		const t = editor.locale.t;
		const command = editor.commands.get( WAVYUNDERLINE )!;
		const createButton = getButtonCreator( {
			editor,
			commandName: WAVYUNDERLINE,
			plugin: this,
			icon: wavyunderlineIcon,
			label: t( 'Wavy underline' ),
			keystroke: 'ALT+W'
		} );

		// Add wavyunderline button to feature components.
		editor.ui.componentFactory.add( WAVYUNDERLINE, () => {
			const buttonView = createButton( ButtonView );

			buttonView.set( {
				tooltip: true
			} );

			buttonView.bind( 'isOn' ).to( command, 'value' );

			return buttonView;
		} );

		editor.ui.componentFactory.add( 'menuBar:' + WAVYUNDERLINE, () => {
			return createButton( MenuBarMenuListItemButtonView );
		} );
	}
}
