<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */
define('WP_ALLOW_REPAIR', true);
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'wordpress_user' );

/** Database password */
define( 'DB_PASSWORD', 'wordpress_password' );

/** Database hostname */
define( 'DB_HOST', 'mysql' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'rqPY7_i;`YRY?F%}HUK,V4-8rDN9F[c,kQs/@{nq)dcVmJeD1xV1b7bWMhya;Vg#' );
define( 'SECURE_AUTH_KEY',  'u`(rRmw^MpPlmR!1D|]z@E/Q}UmO{2#jK.CVe5utgm)7inu>ppoFoB=<xjGrO~#K' );
define( 'LOGGED_IN_KEY',    'IkXPS~/FUaOq1 zT31Emaq<?O@i>2MFV,[4)mq|8@s;}]v*4fdLixG/*d>,Zj%Fh' );
define( 'NONCE_KEY',        'x@.d2k!Oxb)yKf_Lu SZbH8Z.YDzCe|6p#@GF*AbhQa+!1E=|$th*SK6cyD((+_)' );
define( 'AUTH_SALT',        '/XE*>nqx`{nl&+[5PxbVK]$hHv,j*F|-OE@jna!yZ %>3H6>J$/vtDG$N^}j:*R:' );
define( 'SECURE_AUTH_SALT', 'kanV%1q~/&guSKJ5.%dr/PR`ojS*uQqTDauSk,iCy_!Y{A0^SSVu1 r]RboZG|Iz' );
define( 'LOGGED_IN_SALT',   's>}%K<CEJ}zKU|_2zj@NHe=`nL*/W]Hl/o|tSo9JDez}_d[=]&1(!CGNH|.u[%fr' );
define( 'NONCE_SALT',       'QY!o}|0u`G|DhiA&(/fV7s7_]RUV9Eb0ohf=e;/ck{:z+H.1rXUjjGWPb#|/e{FC' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
