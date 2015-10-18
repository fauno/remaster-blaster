// Make sure that Firefox Social stuff are empty
pref("social.whitelist", "");
pref("social.directories", "");
pref("social.shareDirectory", "");
// No mostrar la ventana de HTTPS Everywhere
pref("extensions.https_everywhere._observatory.popup_shown", true);
pref("extensions.https_everywhere.firstrun_context_menu", false);

// Deshabilitar pedirle permiso a Google para ver un sitio
pref("browser.safebrowsing.enabled", false);
pref("browser.safebrowsing.downloads.enabled", false);
pref("browser.safebrowsing.malware.enabled", false);

// Set useragent to Firefox compatible
//pref("general.useragent.compatMode.firefox", true);
// Spoof the useragent to a generic one
pref("general.useragent.compatMode.firefox", true);
// Spoof the useragent to a generic one
pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0");
pref("general.appname.override", "Netscape");
pref("general.appversion.override", "41.0");
pref("general.buildID.override", "Gecko/20100101");
pref("general.oscpu.override", "Windows NT 6.1");
pref("general.platform.override", "Win32");

// Privacy & Freedom Issues
// https://webdevelopmentaid.wordpress.com/2013/10/21/customize-privacy-settings-in-mozilla-firefox-part-1-aboutconfig/
// https://panopticlick.eff.org
// http://ip-check.info
// http://browserspy.dk
// https://wiki.mozilla.org/Fingerprinting
// http://www.browserleaks.com
// http://fingerprint.pet-portal.eu
pref("privacy.donottrackheader.enabled", true);
pref("privacy.donottrackheader.value", 1);
pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
pref("browser.safebrowsing.enabled", false);
pref("browser.safebrowsing.malware.enabled", false);
//pref("services.sync.privacyURL", "https://www.gnu.org/software/gnuzilla/");
pref("social.enabled", false);
pref("social.remote-install.enabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.healthreport.about.reportUrl", "127.0.0.1");
pref("datareporting.healthreport.documentServerURI", "127.0.0.1");
pref("healthreport.uploadEnabled", false);
pref("social.toast-notifications.enabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.healthreport.service.enabled", false);
pref("browser.slowStartup.notificationDisabled", true);
pref("network.http.sendRefererHeader", 2);
pref("network.http.referer.spoofSource", true);
//http://grack.com/blog/2010/01/06/3rd-party-cookies-dom-storage-and-privacy/
//pref("dom.storage.enabled", false);
pref("dom.event.clipboardevents.enabled",false);
pref("network.prefetch-next", false);
pref("network.dns.disablePrefetch", true);
pref("network.http.sendSecureXSiteReferrer", false);
pref("toolkit.telemetry.enabled", false);
// Do not tell what plugins do we have enabled: https://mail.mozilla.org/pipermail/firefox-dev/2013-November/001186.html
pref("plugins.enumerable_names", "");
pref("plugin.state.flash", 1);
// Do not autoupdate search engines
pref("browser.search.update", false);
// Warn when the page tries to redirect or refresh
//pref("accessibility.blockautorefresh", true);

// Disable channel updates
pref("app.update.enabled", false);
pref("app.update.auto", false);

// Mobile
pref("privacy.announcements.enabled", false);
pref("browser.snippets.enabled", false);
pref("browser.snippets.syncPromo.enabled", false);
pref("browser.snippets.geoUrl", "http://127.0.0.1/");
pref("browser.snippets.updateUrl", "http://127.0.0.1/");
pref("browser.snippets.statsUrl", "http://127.0.0.1/");
pref("datareporting.policy.firstRunTime", 0);
pref("datareporting.policy.dataSubmissionPolicyVersion", 2);
pref("browser.webapps.checkForUpdates", 0);
pref("browser.webapps.updateCheckUrl", "http://127.0.0.1/");
pref("app.faqURL", "http://libreplanet.org/wiki/Group:IceCat/FAQ");

// PFS URL
pref("pfs.datasource.url", "http://gnuzilla.gnu.org/plugins/PluginFinderService.php?mimetype=%PLUGIN_MIMETYPE%");
pref("pfs.filehint.url", "http://gnuzilla.gnu.org/plugins/PluginFinderService.php?mimetype=%PLUGIN_MIMETYPE%");

// Privacidad
pref("datareporting.healthreport.service.enabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("toolkit.telemetry.enabled", false);
pref("media.eme.enabled", false);
pref("media.gmp-eme-adobe.enabled", false);
pref("loop.enabled", false);
pref("media.peerconnection.enabled", false);
pref("geo.enabled", false);
pref("geo.wifi.uri", "");

// Disable third party cookies
pref("network.cookie.cookieBehavior", 1);

// Disable app updater URL
pref("app.update.url", "http://127.0.0.1/");"

// Poodle attack
pref("security.tls.version.min", 1);

// Disable plugin installer
pref("plugins.hide_infobar_for_missing_plugin", true);
pref("plugins.hide_infobar_for_outdated_plugin", true);
pref("plugins.notifyMissingFlash", false);

// Speeding it up
pref("network.http.pipelining", true);
pref("network.http.proxy.pipelining", true);
pref("network.http.pipelining.maxrequests", 10);
pref("nglayout.initialpaint.delay", 0);

// Disable Sponsored Tiles
pref("browser.newtabpage.directory.source", "data:application/json,{}");
pref("browser.newtabpage.directory.ping", "");

// Make sure that the request URL of the Discover Apps is empty
pref("browser.apps.URL", "");

// Disable Freedom Violating DRM Feature
pref("browser.eme.ui.enabled", false);
pref("media.eme.enabled", false);
pref("media.eme.apiVisible", false);

// Disable Pocket and make sure that the request URLs of the Pocket are empty
pref("browser.pocket.enabled", false);
pref("browser.pocket.api", "");
pref("browser.pocket.site", "");
pref("browser.pocket.oAuthConsumerKey", "");
pref("browser.pocket.useLocaleList", false);
pref("browser.pocket.enabledLocales", "");

// Disable Firefox Hello and make sure that the request URLs of the Firefox Hello are empty
pref("loop.enabled", false);
pref("loop.feedback.baseUrl", "");
pref("loop.gettingStarted.url", "");
pref("loop.learnMoreUrl", "");
pref("loop.legal.ToS_url", "");
pref("loop.legal.privacy_url", "");
pref("loop.oauth.google.redirect_uri", "");
pref("loop.oauth.google.scope", "");
pref("loop.server", "");
pref("loop.soft_start_hostname", "");
pref("loop.support_url", "");
pref("loop.throttled2", false);

//
pref("extensions.update.enabled", true);

// Use LANG environment variable to choose locale
pref("intl.locale.matchOS", true);

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);

// Prevent EULA dialog to popup on first run
pref("browser.EULA.override", true);

// Default search engine
pref("browser.search.order.1", "searx");
pref("browser.search.selectedEngine", "searx");
pref("keyword.URL", "https://searx.laquadrature.net/?q=");

// Activate the backspace key for browsing back
pref("browser.backspace_action", 0);

// enable ipv6
pref("network.dns.disableIPv6", false);

// Ignore Mozilla release notes startup pages
pref("browser.startup.homepage_override.mstone", "ignore");

// Homepage
pref("browser.startup.homepage", "https://searx.laquadrature.net/");

// Save tabs before exiting
pref("browser.showQuitWarning", true);

// apturl
pref("network.protocol-handler.app.apt",  "/usr/bin/apturl");
pref("network.protocol-handler.app.apt+http",  "/usr/bin/apturl");
pref("network.protocol-handler.warn-external.apt", true);
pref("network.protocol-handler.warn-external.apt+http", true);

// identify default locale to use if no /usr/lib/firefox-addons/searchplugins/LOCALE
// exists for the current used LOCALE
pref("distribution.searchplugins.defaultLocale", "es-AR");

// Enable the NetworkManager integration
//user_pref("network.manage-offline-status", true);

// Don't disable our bundled extensions in the application directory
pref("extensions.autoDisableScopes", 0);
pref("extensions.shownSelectionUI", true);

// Habilita el reader
pref("reader.parse-on-load.enabled", true);

// Map to hyphenation patterns from openoffice.org-hyphenation and openoffice.org-dictionaries
pref("intl.hyphenation-alias.af", "af-za");
pref("intl.hyphenation-alias.af-*", "af-za");
pref("intl.hyphenation-alias.bn", "bn-in");
pref("intl.hyphenation-alias.bn-*", "bn-in");
pref("intl.hyphenation-alias.ca-*", "ca");
pref("intl.hyphenation-alias.cs", "cs-cz");
pref("intl.hyphenation-alias.cs-*", "cs-cz");
pref("intl.hyphenation-alias.da", "da-dk");
pref("intl.hyphenation-alias.da-*", "da-dk");
pref("intl.hyphenation-alias.de", "de-de");
pref("intl.hyphenation-alias.de-*", "de-de");
pref("intl.hyphenation-alias.de-AT-1901", "de-de");
pref("intl.hyphenation-alias.de-CH-*", "de-de");
pref("intl.hyphenation-alias.de-DE-1901", "de-de");
pref("intl.hyphenation-alias.el", "el-gr");
pref("intl.hyphenation-alias.el-*", "el-gr");
pref("intl.hyphenation-alias.en", "en-us");
pref("intl.hyphenation-alias.en-*", "en-us");
pref("intl.hyphenation-alias.es", "es-es");
pref("intl.hyphenation-alias.es-*", "es-es");
pref("intl.hyphenation-alias.et", "et-ee");
pref("intl.hyphenation-alias.et-*", "et-ee");
pref("intl.hyphenation-alias.fi", "fi-fi");
pref("intl.hyphenation-alias.fi-*", "fi-fi");
pref("intl.hyphenation-alias.fr-*", "fr");
pref("intl.hyphenation-alias.ga", "ga-ie");
pref("intl.hyphenation-alias.ga-*", "ga-ie");
pref("intl.hyphenation-alias.gu", "gu-in");
pref("intl.hyphenation-alias.gu-*", "gu-in");
pref("intl.hyphenation-alias.hi", "hi-in");
pref("intl-hyphenation-alias.hi-in", "hi-in");
pref("intl.hyphenation-alias.hr", "hr-hr");
pref("intl.hyphenation-alias.hr-*", "hr-hr");
pref("intl.hyphenation-alias.hu", "hu-hu");
pref("intl.hyphenation-alias.hu-*", "hu-hu");
pref("intl.hyphenation-alias.id", "id-id");
pref("intl-hyphenation-alias.id-*", "id-id");
pref("intl.hyphenation-alias.is", "is-is");
pref("intl.hyphenation-alias.is-*", "is-is");
pref("intl.hyphenation-alias.it", "it-it");
pref("intl.hyphenation-alias.it-*", "it-it");
pref("intl.hyphenation-alias.kn", "kn-in");
pref("intl.hyphenation-alias.kn-*", "kn-in");
pref("intl.hyphenation-alias.lt", "lt-lt");
pref("intl.hyphenation-alias.lt-*", "lt-lt");
pref("intl.hyphenation-alias.lv", "lv-lv");
pref("intl.hyphenation-alias.lv-*", "lv-lv");
pref("intl.hyphenation-alias.nb", "nb-no");
pref("intl.hyphenation-alias.nb-*", "nb-no");
pref("intl.hyphenation-alias.nl", "nl-nl");
pref("intl.hyphenation-alias.nl-*", "nl-nl");
pref("intl.hyphenation-alias.nn", "nn-no");
pref("intl.hyphenation-alias.nn-*", "nn-no");
pref("intl.hyphenation-alias.pa", "pa-in");
pref("intl.hyphenation-alias.pa-*", "pa-in");
pref("intl.hyphenation-alias.pl", "pl-pl");
pref("intl.hyphenation-alias.pl-*", "pl-pl");
pref("intl.hyphenation-alias.pt", "pt-pt");
pref("intl.hyphenation-alias.pt-*", "pt-pt");
pref("intl.hyphenation-alias.ro", "ro-ro");
pref("intl.hyphenation-alias.ro-*", "ro-ro");
pref("intl.hyphenation-alias.ru", "ru-ru");
pref("intl.hyphenation-alias.ru-*", "ru-ru");
pref("intl.hyphenation-alias.sh-*", "sh");
pref("intl.hyphenation-alias.sk", "sk-sk");
pref("intl.hyphenation-alias.sk-*", "sk-sk");
pref("intl.hyphenation-alias.sl", "sl-si");
pref("intl.hyphenation-alias.sl-*", "sl-si");
pref("intl.hyphenation-alias.sr-*", "sr");
pref("intl.hyphenation-alias.sv", "sv-se");
pref("intl.hyphenation-alias.sv-*", "sv-se");
pref("intl.hyphenation-alias.uk", "uk-ua");
pref("intl.hyphenation-alias.uk-*", "uk-ua");
pref("intl.hyphenation-alias.zu", "zu-za");
pref("intl.hyphenation-alias.zu-*", "zu-za");

