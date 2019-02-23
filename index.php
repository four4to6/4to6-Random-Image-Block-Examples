<?php

/**
 * Plugin Name: FOUR 4to6 Random-Image Block
 * Plugin URI: https://github.com/four4to6/4to6-Block-Examples
 * Description: This is the Custom Block Plugin of the Block Editor (Gutenberg).
 * Author:  FOUR 4to6
 * Author URI: https://neco913.kirara.st/
 * Version: 1.0.0
 * License: GNU General Public License
 * License URI: https://github.com/WordPress/gutenberg/blob/master/LICENSE.md
 */

defined( 'ABSPATH' ) || exit;

/**
 * Enqueue the block's assets for the editor.
 *
 * wp-blocks:  Includes the registerBlockType() function to register blocks.
 * wp-editor:  Includes the RichText functionality for editable content.
 * wp-element: Includes the createElement() function to create elements.
 * wp-i18n:    Includes the __() function for internationalization.
 *
 * @since 1.0.0
 */

// random-image-blocks
function random_image_enqueue_block_editor_assets($hook) {
	wp_enqueue_script(
		'random-image-block',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' )
	);
}
add_action( 'enqueue_block_editor_assets', 'random_image_enqueue_block_editor_assets' );

function random_image_enqueue_block_editor_assets_style($hook) {
    wp_enqueue_style( 'random-image-block-style', plugins_url( 'style.css', __FILE__ ),
    array(),
    filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
     );
}
add_action('enqueue_block_assets', 'random_image_enqueue_block_editor_assets_style');


// include 'examples/index.php';
