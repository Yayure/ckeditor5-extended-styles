import { expect } from 'chai';
import { ExtendedStyles as ExtendedStylesDll, icons } from '../src';
import ExtendedStyles from '../src/extendedstyles';

import ckeditor from './../theme/icons/ckeditor.svg';

describe( 'CKEditor5 ExtendedStyles DLL', () => {
	it( 'exports ExtendedStyles', () => {
		expect( ExtendedStylesDll ).to.equal( ExtendedStyles );
	} );

	describe( 'icons', () => {
		it( 'exports the "ckeditor" icon', () => {
			expect( icons.ckeditor ).to.equal( ckeditor );
		} );
	} );
} );
