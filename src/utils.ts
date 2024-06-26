/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/utils
 */

import type { Editor, Plugin } from 'ckeditor5/src/core';
import type AttributeCommand from './attributecommand';
import type { ButtonView, MenuBarMenuListItemButtonView } from 'ckeditor5/src/ui';

/**
 * Returns a function that creates a (toolbar or menu bar) button for a basic style feature.
 */
export function getButtonCreator( {
	editor, commandName, plugin, icon, label, keystroke
}: {
	editor: Editor;
	commandName: string;
	icon: string;
	label: string;
	plugin: Plugin;
	keystroke?: string;
} ) {
	return <T extends typeof ButtonView | typeof MenuBarMenuListItemButtonView>( ButtonClass: T ): InstanceType<T> => {
		const command = editor.commands.get( commandName )! as AttributeCommand;
		const view = new ButtonClass( editor.locale ) as InstanceType<T>;

		view.set( {
			label,
			icon,
			keystroke,
			isToggleable: true
		} );

		view.bind( 'isEnabled' ).to( command, 'isEnabled' );

		// Execute the command.
		plugin.listenTo( view, 'execute', () => {
			editor.execute( commandName );
			editor.editing.view.focus();
		} );

		return view;
	};
}
