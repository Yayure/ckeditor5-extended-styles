
import { Plugin } from 'ckeditor5/src/core';
import AttributeCommand from '../attributecommand';

const WAVYUNDERLINE = 'wavyunderline';

/**
 * The wavyunderline editing feature.
 *
 * It registers the `'wavyunderline'` command and introduces the `wavyunderline` attribute in the model which renders to the view
 */
export default class WavyunderlineEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get pluginName() {
		return 'WavyunderlineEditing' as const;
	}

	/**
	 * @inheritDoc
	 */
	public init(): void {
		const editor = this.editor;
		const t = this.editor.t;

		// Allow wavyunderline attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: WAVYUNDERLINE } );
		editor.model.schema.setAttributeProperties( WAVYUNDERLINE, {
			isFormatting: true,
			copyOnEnter: true
		} );

		editor.conversion.attributeToElement( {
			model: WAVYUNDERLINE,
			view: {
				name: 'span',
				styles: {
					'text-decoration': 'wavy underline'
				}
			}
		} );

		// Create wavyunderline command.
		editor.commands.add( WAVYUNDERLINE, new AttributeCommand( editor, WAVYUNDERLINE ) );

		// Set the Ctrl+E keystroke.
		editor.keystrokes.set( 'ALT+W', WAVYUNDERLINE );

		// Add the information about the keystroke to the accessibility database.
		editor.accessibility.addKeystrokeInfos( {
			keystrokes: [
				{
					label: t( 'Wavyunderline text' ),
					keystroke: 'ALT+W'
				}
			]
		} );
	}
}
