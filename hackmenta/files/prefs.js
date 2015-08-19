// No mostrar la ventana de HTTPS Everywhere
user_pref("extensions.https_everywhere._observatory.popup_shown", true);
user_pref("extensions.https_everywhere.firstrun_context_menu", false);

// Deshabilitar pedirle permiso a Google para ver un sitio
user_pref("browser.safebrowsing.enabled", false);
//
user_pref("extensions.update.enabled", true);

// Use LANG environment variable to choose locale
user_pref("intl.locale.matchOS", true);

// Disable default browser checking.
user_pref("browser.shell.checkDefaultBrowser", false);

// Prevent EULA dialog to popup on first run
user_pref("browser.EULA.override", true);

// Set the UserAgent
user_pref("general.useragent.vendor", "HackMenta");
user_pref("general.useragent.vendorSub", "17");
user_pref("general.useragent.vendorComment", "Qiana");

// Default search engine
user_pref("browser.search.order.1", "searx");
user_pref("browser.search.selectedEngine", "searx");
user_pref("browser.search.searchEnginesURL", "http://www.linuxmint.com/searchengines/");
user_pref("keyword.URL", "http://searx.laquadrature.net/?q=");

// Activate the backspace key for browsing back
user_pref("browser.backspace_action", 0);

// enable ipv6
user_pref("network.dns.disableIPv6", false);

// Ignore Mozilla release notes startup pages
user_pref("browser.startup.homepage_override.mstone", "ignore");

// Homepage
user_pref("browser.startup.homepage", "http://wiki.hackcoop.com.ar/");

// Save tabs before exiting
user_pref("browser.showQuitWarning", true);

// apturl
user_pref("network.protocol-handler.app.apt",  "/usr/bin/apturl");
user_pref("network.protocol-handler.app.apt+http",  "/usr/bin/apturl");
user_pref("network.protocol-handler.warn-external.apt", true);
user_pref("network.protocol-handler.warn-external.apt+http", true);

// identify default locale to use if no /usr/lib/firefox-addons/searchplugins/LOCALE
// exists for the current used LOCALE
user_pref("distribution.searchplugins.defaultLocale", "es-AR");

// Enable the NetworkManager integration
//user_pref("network.manage-offline-status", true);

// Don't disable our bundled extensions in the application directory
user_pref("extensions.autoDisableScopes", 0);
user_pref("extensions.shownSelectionUI", true);

// Habilita el reader
user_pref("reader.parse-on-load.enabled", true);

// Map to hyphenation patterns from openoffice.org-hyphenation and openoffice.org-dictionaries
user_pref("intl.hyphenation-alias.af", "af-za");
user_pref("intl.hyphenation-alias.af-*", "af-za");
user_pref("intl.hyphenation-alias.bn", "bn-in");
user_pref("intl.hyphenation-alias.bn-*", "bn-in");
user_pref("intl.hyphenation-alias.ca-*", "ca");
user_pref("intl.hyphenation-alias.cs", "cs-cz");
user_pref("intl.hyphenation-alias.cs-*", "cs-cz");
user_pref("intl.hyphenation-alias.da", "da-dk");
user_pref("intl.hyphenation-alias.da-*", "da-dk");
user_pref("intl.hyphenation-alias.de", "de-de");
user_pref("intl.hyphenation-alias.de-*", "de-de");
user_pref("intl.hyphenation-alias.de-AT-1901", "de-de");
user_pref("intl.hyphenation-alias.de-CH-*", "de-de");
user_pref("intl.hyphenation-alias.de-DE-1901", "de-de");
user_pref("intl.hyphenation-alias.el", "el-gr");
user_pref("intl.hyphenation-alias.el-*", "el-gr");
user_pref("intl.hyphenation-alias.en", "en-us");
user_pref("intl.hyphenation-alias.en-*", "en-us");
user_pref("intl.hyphenation-alias.es", "es-es");
user_pref("intl.hyphenation-alias.es-*", "es-es");
user_pref("intl.hyphenation-alias.et", "et-ee");
user_pref("intl.hyphenation-alias.et-*", "et-ee");
user_pref("intl.hyphenation-alias.fi", "fi-fi");
user_pref("intl.hyphenation-alias.fi-*", "fi-fi");
user_pref("intl.hyphenation-alias.fr-*", "fr");
user_pref("intl.hyphenation-alias.ga", "ga-ie");
user_pref("intl.hyphenation-alias.ga-*", "ga-ie");
user_pref("intl.hyphenation-alias.gu", "gu-in");
user_pref("intl.hyphenation-alias.gu-*", "gu-in");
user_pref("intl.hyphenation-alias.hi", "hi-in");
user_pref("intl-hyphenation-alias.hi-in", "hi-in");
user_pref("intl.hyphenation-alias.hr", "hr-hr");
user_pref("intl.hyphenation-alias.hr-*", "hr-hr");
user_pref("intl.hyphenation-alias.hu", "hu-hu");
user_pref("intl.hyphenation-alias.hu-*", "hu-hu");
user_pref("intl.hyphenation-alias.id", "id-id");
user_pref("intl-hyphenation-alias.id-*", "id-id");
user_pref("intl.hyphenation-alias.is", "is-is");
user_pref("intl.hyphenation-alias.is-*", "is-is");
user_pref("intl.hyphenation-alias.it", "it-it");
user_pref("intl.hyphenation-alias.it-*", "it-it");
user_pref("intl.hyphenation-alias.kn", "kn-in");
user_pref("intl.hyphenation-alias.kn-*", "kn-in");
user_pref("intl.hyphenation-alias.lt", "lt-lt");
user_pref("intl.hyphenation-alias.lt-*", "lt-lt");
user_pref("intl.hyphenation-alias.lv", "lv-lv");
user_pref("intl.hyphenation-alias.lv-*", "lv-lv");
user_pref("intl.hyphenation-alias.nb", "nb-no");
user_pref("intl.hyphenation-alias.nb-*", "nb-no");
user_pref("intl.hyphenation-alias.nl", "nl-nl");
user_pref("intl.hyphenation-alias.nl-*", "nl-nl");
user_pref("intl.hyphenation-alias.nn", "nn-no");
user_pref("intl.hyphenation-alias.nn-*", "nn-no");
user_pref("intl.hyphenation-alias.pa", "pa-in");
user_pref("intl.hyphenation-alias.pa-*", "pa-in");
user_pref("intl.hyphenation-alias.pl", "pl-pl");
user_pref("intl.hyphenation-alias.pl-*", "pl-pl");
user_pref("intl.hyphenation-alias.pt", "pt-pt");
user_pref("intl.hyphenation-alias.pt-*", "pt-pt");
user_pref("intl.hyphenation-alias.ro", "ro-ro");
user_pref("intl.hyphenation-alias.ro-*", "ro-ro");
user_pref("intl.hyphenation-alias.ru", "ru-ru");
user_pref("intl.hyphenation-alias.ru-*", "ru-ru");
user_pref("intl.hyphenation-alias.sh-*", "sh");
user_pref("intl.hyphenation-alias.sk", "sk-sk");
user_pref("intl.hyphenation-alias.sk-*", "sk-sk");
user_pref("intl.hyphenation-alias.sl", "sl-si");
user_pref("intl.hyphenation-alias.sl-*", "sl-si");
user_pref("intl.hyphenation-alias.sr-*", "sr");
user_pref("intl.hyphenation-alias.sv", "sv-se");
user_pref("intl.hyphenation-alias.sv-*", "sv-se");
user_pref("intl.hyphenation-alias.uk", "uk-ua");
user_pref("intl.hyphenation-alias.uk-*", "uk-ua");
user_pref("intl.hyphenation-alias.zu", "zu-za");
user_pref("intl.hyphenation-alias.zu-*", "zu-za");

