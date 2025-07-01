/* ========================================
   PIZZA&PASTA D'AMICO - MEHRSPRACHIGKEIT
   Automatische Browser-Spracherkennung + Manuelle Auswahl
   ======================================== */

class MultiLanguage {
    constructor() {
        this.currentLang = 'de'; // Standard
        this.supportedLangs = ['de', 'fr', 'it', 'es', 'en'];
        this.translations = {};
        this.init();
    }

    // Automatische Browser-Spracherkennung
    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        // Prüfe ob Browser-Sprache unterstützt wird
        if (this.supportedLangs.includes(langCode)) {
            console.log(`Browser-Sprache erkannt: ${langCode}`);
            return langCode;
        }
        
        // Fallback auf Deutsch
        console.log(`Browser-Sprache ${langCode} nicht unterstützt, verwende Deutsch`);
        return 'de';
    }

    // Initialisierung
    async init() {
        // Lade Übersetzungen
        await this.loadTranslations();
        
        // Bestimme Sprache: 1. LocalStorage, 2. Browser, 3. Standard (DE)
        const savedLang = localStorage.getItem('selectedLanguage');
        if (savedLang && this.supportedLangs.includes(savedLang)) {
            this.currentLang = savedLang;
        } else {
            this.currentLang = this.detectBrowserLanguage();
            localStorage.setItem('selectedLanguage', this.currentLang);
        }
        
        // Erstelle Sprachauswahl-UI
        this.createLanguageSelector();
        
        // Wende Übersetzungen an
        this.applyTranslations();
        
        console.log(`Mehrsprachigkeit initialisiert: ${this.currentLang.toUpperCase()}`);
    }

    // Übersetzungen laden
    async loadTranslations() {
        this.translations = {
            de: {
                // ALLGEMEIN
                'loading': 'Wird geladen...',
                'error': 'Fehler',
                'success': 'Erfolgreich',
                'close': 'Schließen',
                'cancel': 'Abbrechen',
                'confirm': 'Bestätigen',
                'yes': 'Ja',
                'no': 'Nein',
                'save': 'Speichern',
                'edit': 'Bearbeiten',
                'delete': 'Löschen',
                'back': 'Zurück',
                'next': 'Weiter',
                'refresh': 'Aktualisieren',
                
                // KUNDENSEITE
                'site.title': 'Pizza&Pasta D\'amico - Authentische italienische Küche',
                'site.subtitle': 'Authentische italienische Küche',
                'site.location': 'Foodtruck • Abholung',
                'loading.title': 'Pizza&Pasta D\'amico',
                'loading.subtitle': 'Lade köstliche Speisekarte...',
                'status.open': 'Geöffnet',
                'status.closed': 'Geschlossen',
                'waittime.current': 'Aktuelle Wartezeit: {time} Minuten',
                'waittime.estimate': '{time} Min',
                
                // PRODUKTE & BESTELLUNG
                'products.title': 'Unsere Spezialitäten',
                'cart.title': 'Ihre Bestellung',
                'cart.total': 'Gesamttotal',
                'cart.empty': 'Produkt auswählen',
                'order.button': 'Bestellen ({count} Artikel)',
                'order.note': 'Besondere Wünsche',
                'order.note.placeholder': 'z.B. extra scharf, ohne Zwiebeln...',
                'order.processing': 'Bestellung wird verarbeitet...',
                'order.success': '✅ Bestellung #{id} eingegangen! Geschätzte Wartezeit: {time} Min',
                'order.error': 'Fehler bei der Bestellung. Bitte versuchen Sie es erneut.',
                'order.track.title': 'Möchten Sie Ihre Bestellung verfolgen?',
                
                // STATUS NACHRICHTEN
                'status.closed.title': 'Foodtruck geschlossen',
                'status.closed.desc': 'Wir sind gerade geschlossen. Schauen Sie später wieder vorbei!',
                'status.noproducts.title': 'Keine Produkte verfügbar',
                'status.noproducts.desc': 'Momentan sind keine Gerichte verfügbar.',
                'status.error.title': 'Verbindungsfehler',
                'status.error.desc': 'Es gab ein Problem beim Laden. Bitte versuchen Sie es erneut.',
                'status.retry': 'Nochmal versuchen',
                
                // ADMIN
                'admin.login': 'Pietro Admin Login',
                'admin.subtitle': 'Zum Admin-Bereich',
                'admin.orders.title': 'Bestellungen',
                'admin.orders.today': 'Heute',
                'admin.orders.new': 'Neu',
                'admin.orders.revenue': 'Umsatz',
                'admin.orders.all': 'Alle',
                'admin.orders.preparation': 'In Zubereitung',
                'admin.orders.ready': 'Fertig',
                'admin.orders.empty': 'Keine Bestellungen',
                'admin.orders.empty.desc': 'Neue Bestellungen werden hier automatisch angezeigt',
                
                // BESTELLSTATUS
                'order.status.new': 'Neu',
                'order.status.preparation': 'In Zubereitung',
                'order.status.ready': 'Fertig',
                'order.action.start': 'Zubereitung',
                'order.action.finish': 'Fertig',
                'order.action.notify': 'Benachrichtigen',
                'order.action.call': 'Kunde rufen',
                'order.action.archive': 'Abgeholt',
                
                // BENACHRICHTIGUNGEN
                'notify.new.order': '🍕 Neue Bestellung eingegangen!',
                'notify.order.preparation': 'Ihre Bestellung wird jetzt zubereitet',
                'notify.order.ready': 'Ihre Bestellung ist fertig zur Abholung!',
                'notify.order.call': 'Bitte holen Sie Ihre Bestellung ab - sie ist schon länger fertig!',
                'notify.customer.notified': 'Kunde benachrichtigt: {message}',
                'notify.sound.on': 'Sound AN',
                'notify.sound.off': 'Sound AUS',
            },
            
            fr: {
                // ALLGEMEIN
                'loading': 'Chargement...',
                'error': 'Erreur',
                'success': 'Succès',
                'close': 'Fermer',
                'cancel': 'Annuler',
                'confirm': 'Confirmer',
                'yes': 'Oui',
                'no': 'Non',
                'save': 'Enregistrer',
                'edit': 'Modifier',
                'delete': 'Supprimer',
                'back': 'Retour',
                'next': 'Suivant',
                'refresh': 'Actualiser',
                
                // KUNDENSEITE
                'site.title': 'Pizza&Pasta D\'amico - Cuisine italienne authentique',
                'site.subtitle': 'Cuisine italienne authentique',
                'site.location': 'Food truck • À emporter',
                'loading.title': 'Pizza&Pasta D\'amico',
                'loading.subtitle': 'Chargement de la délicieuse carte...',
                'status.open': 'Ouvert',
                'status.closed': 'Fermé',
                'waittime.current': 'Temps d\'attente actuel: {time} minutes',
                'waittime.estimate': '{time} Min',
                
                // PRODUKTE & BESTELLUNG
                'products.title': 'Nos spécialités',
                'cart.title': 'Votre commande',
                'cart.total': 'Total général',
                'cart.empty': 'Sélectionner un produit',
                'order.button': 'Commander ({count} articles)',
                'order.note': 'Souhaits particuliers',
                'order.note.placeholder': 'ex. extra épicé, sans oignons...',
                'order.processing': 'Commande en cours de traitement...',
                'order.success': '✅ Commande #{id} reçue! Temps d\'attente estimé: {time} Min',
                'order.error': 'Erreur lors de la commande. Veuillez réessayer.',
                'order.track.title': 'Voulez-vous suivre votre commande?',
                
                // STATUS NACHRICHTEN
                'status.closed.title': 'Food truck fermé',
                'status.closed.desc': 'Nous sommes actuellement fermés. Repassez plus tard!',
                'status.noproducts.title': 'Aucun produit disponible',
                'status.noproducts.desc': 'Aucun plat n\'est actuellement disponible.',
                'status.error.title': 'Erreur de connexion',
                'status.error.desc': 'Il y a eu un problème lors du chargement. Veuillez réessayer.',
                'status.retry': 'Réessayer',
                
                // ADMIN
                'admin.login': 'Connexion Admin Pietro',
                'admin.subtitle': 'Vers l\'espace admin',
                'admin.orders.title': 'Commandes',
                'admin.orders.today': 'Aujourd\'hui',
                'admin.orders.new': 'Nouveau',
                'admin.orders.revenue': 'Chiffre d\'affaires',
                'admin.orders.all': 'Toutes',
                'admin.orders.preparation': 'En préparation',
                'admin.orders.ready': 'Prêt',
                'admin.orders.empty': 'Aucune commande',
                'admin.orders.empty.desc': 'Les nouvelles commandes apparaîtront ici automatiquement',
                
                // BESTELLSTATUS
                'order.status.new': 'Nouveau',
                'order.status.preparation': 'En préparation',
                'order.status.ready': 'Prêt',
                'order.action.start': 'Préparer',
                'order.action.finish': 'Terminé',
                'order.action.notify': 'Notifier',
                'order.action.call': 'Appeler le client',
                'order.action.archive': 'Récupéré',
                
                // BENACHRICHTIGUNGEN
                'notify.new.order': '🍕 Nouvelle commande reçue!',
                'notify.order.preparation': 'Votre commande est en cours de préparation',
                'notify.order.ready': 'Votre commande est prête à être récupérée!',
                'notify.order.call': 'Veuillez récupérer votre commande - elle est prête depuis un moment!',
                'notify.customer.notified': 'Client notifié: {message}',
                'notify.sound.on': 'Son ACTIVÉ',
                'notify.sound.off': 'Son DÉSACTIVÉ',
            },
            
            it: {
                // ALLGEMEIN
                'loading': 'Caricamento...',
                'error': 'Errore',
                'success': 'Successo',
                'close': 'Chiudi',
                'cancel': 'Annulla',
                'confirm': 'Conferma',
                'yes': 'Sì',
                'no': 'No',
                'save': 'Salva',
                'edit': 'Modifica',
                'delete': 'Elimina',
                'back': 'Indietro',
                'next': 'Avanti',
                'refresh': 'Aggiorna',
                
                // KUNDENSEITE
                'site.title': 'Pizza&Pasta D\'amico - Autentica cucina italiana',
                'site.subtitle': 'Autentica cucina italiana',
                'site.location': 'Food truck • Da asporto',
                'loading.title': 'Pizza&Pasta D\'amico',
                'loading.subtitle': 'Caricamento del delizioso menu...',
                'status.open': 'Aperto',
                'status.closed': 'Chiuso',
                'waittime.current': 'Tempo di attesa attuale: {time} minuti',
                'waittime.estimate': '{time} Min',
                
                // PRODUKTE & BESTELLUNG
                'products.title': 'Le nostre specialità',
                'cart.title': 'Il tuo ordine',
                'cart.total': 'Totale generale',
                'cart.empty': 'Seleziona un prodotto',
                'order.button': 'Ordina ({count} articoli)',
                'order.note': 'Richieste speciali',
                'order.note.placeholder': 'es. extra piccante, senza cipolle...',
                'order.processing': 'Ordine in elaborazione...',
                'order.success': '✅ Ordine #{id} ricevuto! Tempo di attesa stimato: {time} Min',
                'order.error': 'Errore nell\'ordine. Si prega di riprovare.',
                'order.track.title': 'Vuoi tracciare il tuo ordine?',
                
                // STATUS NACHRICHTEN
                'status.closed.title': 'Food truck chiuso',
                'status.closed.desc': 'Siamo attualmente chiusi. Torna più tardi!',
                'status.noproducts.title': 'Nessun prodotto disponibile',
                'status.noproducts.desc': 'Nessun piatto è attualmente disponibile.',
                'status.error.title': 'Errore di connessione',
                'status.error.desc': 'Si è verificato un problema durante il caricamento. Si prega di riprovare.',
                'status.retry': 'Riprova',
                
                // ADMIN
                'admin.login': 'Accesso Admin Pietro',
                'admin.subtitle': 'All\'area admin',
                'admin.orders.title': 'Ordini',
                'admin.orders.today': 'Oggi',
                'admin.orders.new': 'Nuovo',
                'admin.orders.revenue': 'Fatturato',
                'admin.orders.all': 'Tutti',
                'admin.orders.preparation': 'In preparazione',
                'admin.orders.ready': 'Pronto',
                'admin.orders.empty': 'Nessun ordine',
                'admin.orders.empty.desc': 'I nuovi ordini appariranno qui automaticamente',
                
                // BESTELLSTATUS
                'order.status.new': 'Nuovo',
                'order.status.preparation': 'In preparazione',
                'order.status.ready': 'Pronto',
                'order.action.start': 'Prepara',
                'order.action.finish': 'Finito',
                'order.action.notify': 'Notifica',
                'order.action.call': 'Chiama cliente',
                'order.action.archive': 'Ritirato',
                
                // BENACHRICHTIGUNGEN
                'notify.new.order': '🍕 Nuovo ordine ricevuto!',
                'notify.order.preparation': 'Il tuo ordine è in preparazione',
                'notify.order.ready': 'Il tuo ordine è pronto per il ritiro!',
                'notify.order.call': 'Si prega di ritirare l\'ordine - è pronto da un po\'!',
                'notify.customer.notified': 'Cliente notificato: {message}',
                'notify.sound.on': 'Suono ATTIVO',
                'notify.sound.off': 'Suono DISATTIVO',
            },
            
            es: {
                // ALLGEMEIN
                'loading': 'Cargando...',
                'error': 'Error',
                'success': 'Éxito',
                'close': 'Cerrar',
                'cancel': 'Cancelar',
                'confirm': 'Confirmar',
                'yes': 'Sí',
                'no': 'No',
                'save': 'Guardar',
                'edit': 'Editar',
                'delete': 'Eliminar',
                'back': 'Atrás',
                'next': 'Siguiente',
                'refresh': 'Actualizar',
                
                // KUNDENSEITE
                'site.title': 'Pizza&Pasta D\'amico - Auténtica cocina italiana',
                'site.subtitle': 'Auténtica cocina italiana',
                'site.location': 'Food truck • Para llevar',
                'loading.title': 'Pizza&Pasta D\'amico',
                'loading.subtitle': 'Cargando el delicioso menú...',
                'status.open': 'Abierto',
                'status.closed': 'Cerrado',
                'waittime.current': 'Tiempo de espera actual: {time} minutos',
                'waittime.estimate': '{time} Min',
                
                // PRODUKTE & BESTELLUNG
                'products.title': 'Nuestras especialidades',
                'cart.title': 'Tu pedido',
                'cart.total': 'Total general',
                'cart.empty': 'Seleccionar un producto',
                'order.button': 'Pedir ({count} artículos)',
                'order.note': 'Deseos especiales',
                'order.note.placeholder': 'ej. extra picante, sin cebollas...',
                'order.processing': 'Procesando pedido...',
                'order.success': '✅ ¡Pedido #{id} recibido! Tiempo de espera estimado: {time} Min',
                'order.error': 'Error en el pedido. Por favor, inténtelo de nuevo.',
                'order.track.title': '¿Quiere rastrear su pedido?',
                
                // STATUS NACHRICHTEN
                'status.closed.title': 'Food truck cerrado',
                'status.closed.desc': 'Actualmente estamos cerrados. ¡Vuelve más tarde!',
                'status.noproducts.title': 'No hay productos disponibles',
                'status.noproducts.desc': 'No hay platos disponibles actualmente.',
                'status.error.title': 'Error de conexión',
                'status.error.desc': 'Hubo un problema al cargar. Por favor, inténtelo de nuevo.',
                'status.retry': 'Reintentar',
                
                // ADMIN
                'admin.login': 'Acceso Admin Pietro',
                'admin.subtitle': 'Al área de administración',
                'admin.orders.title': 'Pedidos',
                'admin.orders.today': 'Hoy',
                'admin.orders.new': 'Nuevo',
                'admin.orders.revenue': 'Ingresos',
                'admin.orders.all': 'Todos',
                'admin.orders.preparation': 'En preparación',
                'admin.orders.ready': 'Listo',
                'admin.orders.empty': 'Sin pedidos',
                'admin.orders.empty.desc': 'Los nuevos pedidos aparecerán aquí automáticamente',
                
                // BESTELLSTATUS
                'order.status.new': 'Nuevo',
                'order.status.preparation': 'En preparación',
                'order.status.ready': 'Listo',
                'order.action.start': 'Preparar',
                'order.action.finish': 'Terminado',
                'order.action.notify': 'Notificar',
                'order.action.call': 'Llamar cliente',
                'order.action.archive': 'Recogido',
                
                // BENACHRICHTIGUNGEN
                'notify.new.order': '🍕 ¡Nuevo pedido recibido!',
                'notify.order.preparation': 'Tu pedido se está preparando',
                'notify.order.ready': '¡Tu pedido está listo para recoger!',
                'notify.order.call': 'Por favor recoja su pedido - ¡ha estado listo por un tiempo!',
                'notify.customer.notified': 'Cliente notificado: {message}',
                'notify.sound.on': 'Sonido ACTIVADO',
                'notify.sound.off': 'Sonido DESACTIVADO',
            },
            
            en: {
                // ALLGEMEIN
                'loading': 'Loading...',
                'error': 'Error',
                'success': 'Success',
                'close': 'Close',
                'cancel': 'Cancel',
                'confirm': 'Confirm',
                'yes': 'Yes',
                'no': 'No',
                'save': 'Save',
                'edit': 'Edit',
                'delete': 'Delete',
                'back': 'Back',
                'next': 'Next',
                'refresh': 'Refresh',
                
                // KUNDENSEITE
                'site.title': 'Pizza&Pasta D\'amico - Authentic Italian Cuisine',
                'site.subtitle': 'Authentic Italian Cuisine',
                'site.location': 'Food truck • Takeaway',
                'loading.title': 'Pizza&Pasta D\'amico',
                'loading.subtitle': 'Loading delicious menu...',
                'status.open': 'Open',
                'status.closed': 'Closed',
                'waittime.current': 'Current wait time: {time} minutes',
                'waittime.estimate': '{time} Min',
                
                // PRODUKTE & BESTELLUNG
                'products.title': 'Our Specialties',
                'cart.title': 'Your Order',
                'cart.total': 'Total',
                'cart.empty': 'Select a product',
                'order.button': 'Order ({count} items)',
                'order.note': 'Special requests',
                'order.note.placeholder': 'e.g. extra spicy, no onions...',
                'order.processing': 'Processing order...',
                'order.success': '✅ Order #{id} received! Estimated wait time: {time} Min',
                'order.error': 'Error with order. Please try again.',
                'order.track.title': 'Would you like to track your order?',
                
                // STATUS NACHRICHTEN
                'status.closed.title': 'Food truck closed',
                'status.closed.desc': 'We are currently closed. Come back later!',
                'status.noproducts.title': 'No products available',
                'status.noproducts.desc': 'No dishes are currently available.',
                'status.error.title': 'Connection error',
                'status.error.desc': 'There was a problem loading. Please try again.',
                'status.retry': 'Try again',
                
                // ADMIN
                'admin.login': 'Pietro Admin Login',
                'admin.subtitle': 'To admin login',
                'admin.orders.title': 'Orders',
                'admin.orders.today': 'Today',
                'admin.orders.new': 'New',
                'admin.orders.revenue': 'Revenue',
                'admin.orders.all': 'All',
                'admin.orders.preparation': 'In preparation',
                'admin.orders.ready': 'Ready',
                'admin.orders.empty': 'No orders',
                'admin.orders.empty.desc': 'New orders will appear here automatically',
                
                // BESTELLSTATUS
                'order.status.new': 'New',
                'order.status.preparation': 'In preparation', 
                'order.status.ready': 'Ready',
                'order.action.start': 'Start',
                'order.action.finish': 'Finish',
                'order.action.notify': 'Notify',
                'order.action.call': 'Call customer',
                'order.action.archive': 'Picked up',
                
                // BENACHRICHTIGUNGEN
                'notify.new.order': '🍕 New order received!',
                'notify.order.preparation': 'Your order is now being prepared',
                'notify.order.ready': 'Your order is ready for pickup!',
                'notify.order.call': 'Please pick up your order - it has been ready for a while!',
                'notify.customer.notified': 'Customer notified: {message}',
                'notify.sound.on': 'Sound ON',
                'notify.sound.off': 'Sound OFF',
            }
        };
    }

    // Sprachauswahl-UI erstellen
    createLanguageSelector() {
        const selector = document.createElement('div');
        selector.className = 'language-selector';
        selector.innerHTML = `
            <div class="lang-dropdown">
                <button class="lang-btn" id="langBtn">
                    ${this.getLanguageFlag(this.currentLang)} ${this.currentLang.toUpperCase()}
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="lang-menu" id="langMenu">
                    ${this.supportedLangs.map(lang => `
                        <div class="lang-option ${lang === this.currentLang ? 'active' : ''}" data-lang="${lang}">
                            ${this.getLanguageFlag(lang)} ${this.getLanguageName(lang)}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        document.body.appendChild(selector);
        this.setupLanguageEvents();
    }

    // Event-Listener für Sprachauswahl
    setupLanguageEvents() {
        const langBtn = document.getElementById('langBtn');
        const langMenu = document.getElementById('langMenu');
        
        // Dropdown Toggle
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('show');
        });
        
        // Außerhalb klicken schließt Dropdown
        document.addEventListener('click', () => {
            langMenu.classList.remove('show');
        });
        
        // Sprachauswahl
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const selectedLang = e.currentTarget.dataset.lang;
                this.changeLanguage(selectedLang);
                langMenu.classList.remove('show');
            });
        });
    }

    // Sprache wechseln
    changeLanguage(langCode) {
        if (!this.supportedLangs.includes(langCode)) return;
        
        this.currentLang = langCode;
        localStorage.setItem('selectedLanguage', langCode);
        
        // UI aktualisieren
        document.getElementById('langBtn').innerHTML = `
            ${this.getLanguageFlag(langCode)} ${langCode.toUpperCase()}
            <i class="fas fa-chevron-down"></i>
        `;
        
        // Active-Status aktualisieren
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.toggle('active', option.dataset.lang === langCode);
        });
        
        // Übersetzungen anwenden
        this.applyTranslations();
        
        // HTML lang-Attribut setzen
        document.documentElement.lang = langCode;
        
        console.log(`Sprache gewechselt zu: ${langCode.toUpperCase()}`);
    }

    // Übersetzungen auf der Seite anwenden
    applyTranslations() {
        // Alle Elemente mit data-i18n Attribut übersetzen
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translation;
            } else if (element.tagName === 'INPUT' && element.type === 'button') {
                element.value = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Title und Meta-Tags aktualisieren
        const title = this.t('site.title');
        if (title !== 'site.title') {
            document.title = title;
        }
    }

    // Übersetzung abrufen mit Platzhalter-Unterstützung
    t(key, params = {}) {
        const translation = this.translations[this.currentLang]?.[key] || key;
        
        // Platzhalter ersetzen
        return translation.replace(/{(\w+)}/g, (match, param) => {
            return params[param] || match;
        });
    }

    // Sprach-Flags
    getLanguageFlag(langCode) {
        const flags = {
            'de': '🇩🇪',
            'fr': '🇫🇷', 
            'it': '🇮🇹',
            'es': '🇪🇸',
            'en': '🇬🇧'
        };
        return flags[langCode] || '🌍';
    }

    // Sprach-Namen
    getLanguageName(langCode) {
        const names = {
            'de': 'Deutsch',
            'fr': 'Français',
            'it': 'Italiano', 
            'es': 'Español',
            'en': 'English'
        };
        return names[langCode] || langCode.toUpperCase();
    }

    // Aktuell ausgewählte Sprache
    getCurrentLanguage() {
        return this.currentLang;
    }

    // Unterstützte Sprachen
    getSupportedLanguages() {
        return this.supportedLangs;
    }
}

// Globale Instanz erstellen
window.ml = new MultiLanguage();

// Hilfsfunktion für einfachere Verwendung
window.t = (key, params) => window.ml.t(key, params);