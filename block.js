// block.js
( function( blocks, editor, i18n, element ) {
	var el = element.createElement,
		source = blocks.source;
	var __ = i18n.__;
	var RichText = editor.RichText;

	function RandomImage( props ) {
		var src = 'http://lorempixel.com/400/200/' + props.category;

		return el( 'img', {
			src: src,
			alt: props.category
		} );
	}

	blocks.registerBlockType( 'myplugin/random-image', {
		title: 'Random Image',

		// icon: 'format-image',   // Specifying a dashicon for the block
		icon: ( { background:'#ffa5a5', foreground:'#333333', src:'format-image',} ),

		category: 'common',

                description: __( 'Block displaying random images.' ),

                // Make it easier to discover a block with keyword aliases.
                // These can be localised so your keywords work across locales.
                keywords: [ __( 'image' ), __( 'photo' ), __( 'random' ) ],

                styles: [ { isDefault: false }, ],

		attributes: {
			category: {
				type: 'string',
				source: 'attribute',
				attribute: 'alt',
				selector: 'img',
			}
		},

		edit: function( props ) {

			var category = props.attributes.category,
				children;

			function setCategory( event ) {
				var selected = event.target.querySelector( 'option:checked' );
				props.setAttributes( { category: selected.value } );
				event.preventDefault();
			}

			children = [];
			if ( category ) {
				children.push( RandomImage( { category: category } ) );
			}

			children.push(
				el( 'select', { value: category, onChange: setCategory },
					el( 'option', null, '- Select -' ),
					el( 'option', { value: 'cats' }, 'Cats' ),
					el( 'option', { value: 'fashion' }, 'Fashion' ),
					el( 'option', { value: 'animals' }, 'Animals' ),
					el( 'option', { value: 'city' }, 'City' ),
					el( 'option', { value: 'nature' }, 'Nature' )
				)
			);

			return el( 'form', { onSubmit: setCategory }, children );
		},

		save: function( props ) {
			return RandomImage( { category: props.attributes.category } );
		}
	} );
} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element,
);
