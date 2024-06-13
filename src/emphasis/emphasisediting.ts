
import { Plugin } from 'ckeditor5/src/core';
import AttributeCommand from '../attributecommand';

const EMPHASIS = 'emphasis';

/**
 * The emphasis editing feature.
 *
 * It registers the `'emphasis'` command and introduces the `emphasis` attribute in the model which renders to the view
 */
export default class BoldEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get pluginName() {
		return 'EmphasisEditing' as const;
	}

	/**
	 * @inheritDoc
	 */
	public init(): void {
		const editor = this.editor;
		const t = this.editor.t;

		// Allow emphasis attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: EMPHASIS } );
		editor.model.schema.setAttributeProperties( EMPHASIS, {
			isFormatting: true,
			copyOnEnter: true
		} );

		editor.conversion.attributeToElement( {
			model: EMPHASIS,
			view: {
				name: 'span',
				styles: {
					'-webkit-text-emphasis': 'dot',
					'text-emphasis': 'dot',
					'-webkit-text-emphasis-position': 'under right',
					'text-emphasis-position': 'under right'
				}
			}
		} );

		// Create emphasis command.
		editor.commands.add( EMPHASIS, new AttributeCommand( editor, EMPHASIS ) );

		// Set the Ctrl+E keystroke.
		editor.keystrokes.set( 'CTRL+E', EMPHASIS );

		// Add the information about the keystroke to the accessibility database.
		editor.accessibility.addKeystrokeInfos( {
			keystrokes: [
				{
					label: t( 'Emphasis text' ),
					keystroke: 'CTRL+E'
				}
			]
		} );
	}
}
