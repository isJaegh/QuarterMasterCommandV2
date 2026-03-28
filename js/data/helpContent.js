// ============================================================================
// QUARTERMASTER COMMAND - HELP PAGE CONTENT (per language)
// ============================================================================

export const helpContent = {

    en: `
            <p>Welcome to the <strong>Quartermaster Command</strong> Help Page. This application is an advanced, offline-capable dashboard designed to simplify complex metallurgy and extraction pipelines in Mortal Online 2.</p>
            <p>Below you will find a breakdown of every feature and how to utilize it to maximize your refining efficiency.</p>
            <h3 style="border-bottom: 1px solid var(--border); padding-bottom: 4px; margin-top: 20px;">🌟 Key Features & How to Use Them</h3>
            <h4 style="color:var(--text); margin-bottom: 5px;">1. Pipeline Intelligence & Dynamic Recipe Routing</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>What it does:</strong> Automatically maps out the multi-step extraction, refining, and smelting tasks required for complex metals like Steel, Tungsteel, and Oghmium.</li>
                <li style="margin-bottom: 6px;"><strong>How to use it:</strong> Select your target metal and quantity. Choose your routing method:
                    <ul style="margin-top: 4px;">
                        <li style="margin-bottom: 4px;"><strong>[E] Efficient Path:</strong> Prioritizes recipes with the lowest raw material cost.</li>
                        <li style="margin-bottom: 4px;"><strong>[Y] Max Yield:</strong> Prioritizes recipes that generate the highest amount of secondary byproducts.</li>
                        <li style="margin-bottom: 4px;"><strong>[R] Region Locked:</strong> Restricts the calculation to only use machinery available in your specific local region.</li>
                    </ul>
                </li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">2. Calculate Max Craftable</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>What it does:</strong> Instantly calculates the absolute maximum amount of a target metal you can produce based <em>strictly</em> on what you currently have in your bags or bank.</li>
                <li style="margin-bottom: 6px;"><strong>How to use it:</strong> Enter your current on-hand materials into the inventory system, select your target metal, and trigger the calculation.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">3. Smart Market Cart</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>What it does:</strong> Acts as a shopping list and budget tracker for your refining pipelines.</li>
                <li style="margin-bottom: 6px;"><strong>How to use it:</strong> Input local market prices and desired buy quantities. Use the <strong>Auto-Fill</strong> feature to let the system automatically calculate exactly what materials you are missing. The total gold cost updates dynamically.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">4. Discord Dispatch</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>What it does:</strong> Generates a beautifully formatted Markdown work order—cleanly separating items you need to buy on the Market from items that require Manual Gathering.</li>
                <li style="margin-bottom: 6px;"><strong>How to use it:</strong> Once your pipeline and cart are ready, trigger the dispatch. Copy the text directly or push it straight to a Discord Webhook.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">5. State Sharing & Export</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>What it does:</strong> Allows you to save your current inventory, shopping cart, and pipeline goals to share with other crafters.</li>
                <li style="margin-bottom: 6px;"><strong>How to use it:</strong> Click export to generate a short string code to share with guildmates, or choose CSV export to download your data as a spreadsheet.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">6. Deep Customization & Bilingual Support</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Languages:</strong> Toggle between multiple languages at any time from the app settings.</li>
                <li style="margin-bottom: 6px;"><strong>Customization:</strong> Access settings to toggle Dark/Light modes, adjust accent colors, and hide modules you don't actively need.</li>
            </ul>
            <h3 style="border-bottom: 1px solid var(--border); padding-bottom: 4px; margin-top: 20px;">🚀 Installation & Offline Setup</h3>
            <p>Quartermaster Command is a static, client-side application requiring no backend.</p>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Web Browser:</strong> Simply access the hosted URL.</li>
                <li style="margin-bottom: 6px;"><strong>Mobile / App Install (PWA):</strong> Visit the URL on a supported device and tap "Add to Home Screen" to install it as a native offline app.</li>
                <li style="margin-bottom: 6px;"><strong>Local Use:</strong> Download the repository files and double-click <code>index.html</code>.</li>
            </ul>`,

    fr: `
            <p>Bienvenue sur la page d'aide de <strong>Quartermaster Command</strong>. Cette application est un tableau de bord avancé, fonctionnant hors-ligne, conçu pour simplifier les processus complexes de métallurgie et d'extraction dans Mortal Online 2.</p>
            <p>Vous trouverez ci-dessous une description détaillée de chaque fonctionnalité et de la manière de l'utiliser pour maximiser l'efficacité de votre raffinage.</p>
            <h3 style="border-bottom: 1px solid var(--border); padding-bottom: 4px; margin-top: 20px;">🌟 Fonctionnalités Principales et Guide d'Utilisation</h3>
            <h4 style="color:var(--text); margin-bottom: 5px;">1. Intelligence de Pipeline & Routage Dynamique</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Ce que ça fait :</strong> Planifie automatiquement les étapes complexes d'extraction, de raffinage et de fusion requises pour des métaux avancés comme l'Acier, le Tungsteel et l'Oghmium.</li>
                <li style="margin-bottom: 6px;"><strong>Comment l'utiliser :</strong> Sélectionnez le métal désiré et la quantité. Choisissez votre méthode de routage :
                    <ul style="margin-top: 4px;">
                        <li style="margin-bottom: 4px;"><strong>[E] Voie Efficace :</strong> Priorise les recettes avec le coût en matières premières le plus bas.</li>
                        <li style="margin-bottom: 4px;"><strong>[Y] Rendement Maximum :</strong> Priorise les recettes qui génèrent la plus grande quantité de sous-produits secondaires.</li>
                        <li style="margin-bottom: 4px;"><strong>[R] Verrouillage Régional :</strong> Restreint le calcul pour utiliser uniquement les machines disponibles dans votre région spécifique.</li>
                    </ul>
                </li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">2. Calcul du Maximum Fabricable</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Ce que ça fait :</strong> Calcule instantanément la quantité maximale absolue d'un métal cible que vous pouvez fabriquer en vous basant <em>strictement</em> sur ce que vous avez actuellement dans vos sacs ou votre banque.</li>
                <li style="margin-bottom: 6px;"><strong>Comment l'utiliser :</strong> Entrez vos matériaux actuels dans le système d'inventaire, sélectionnez votre métal cible et lancez le calcul.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">3. Panier de Marché Intelligent</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Ce que ça fait :</strong> Sert de liste de courses et de suivi budgétaire pour vos pipelines de raffinage.</li>
                <li style="margin-bottom: 6px;"><strong>Comment l'utiliser :</strong> Saisissez les prix du marché local et les quantités souhaitées. Utilisez <strong>Remplissage Automatique</strong> pour calculer les matériaux manquants. Le coût total en or se met à jour dynamiquement.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">4. Envoi sur Discord (Discord Dispatch)</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Ce que ça fait :</strong> Génère un bon de travail magnifiquement formaté en Markdown, séparant les articles à acheter de ceux nécessitant une récolte manuelle.</li>
                <li style="margin-bottom: 6px;"><strong>Comment l'utiliser :</strong> Une fois prêt, déclenchez l'envoi pour copier le texte ou le pousser vers un Webhook Discord.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">5. Partage d'État et Exportation</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Ce que ça fait :</strong> Permet de sauvegarder votre inventaire, panier et objectifs pour les partager.</li>
                <li style="margin-bottom: 6px;"><strong>Comment l'utiliser :</strong> Cliquez sur exporter pour générer un code texte à partager avec votre guilde, ou exportez en CSV.</li>
            </ul>
            <h4 style="color:var(--text); margin-bottom: 5px;">6. Personnalisation Avancée et Bilinguisme</h4>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Langues :</strong> Basculez entre plusieurs langues depuis les paramètres.</li>
                <li style="margin-bottom: 6px;"><strong>Personnalisation :</strong> Ajustez le mode Sombre/Clair, les couleurs d'accentuation, et masquez les panneaux inutilisés.</li>
            </ul>
            <h3 style="border-bottom: 1px solid var(--border); padding-bottom: 4px; margin-top: 20px;">🚀 Installation et Configuration Hors-Ligne</h3>
            <p>Quartermaster Command est une application statique côté client (aucun serveur requis).</p>
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 6px;"><strong>Utilisation Web :</strong> Accédez simplement à l'URL hébergée.</li>
                <li style="margin-bottom: 6px;"><strong>Installation Mobile / PWA :</strong> Visitez l'URL sur un appareil compatible et appuyez sur "Ajouter à l'écran d'accueil".</li>
                <li style="margin-bottom: 6px;"><strong>Utilisation Locale :</strong> Téléchargez les fichiers et ouvrez <code>index.html</code>.</li>
            </ul>`,

    de: `<p>Willkommen auf der <strong>Quartermaster Command</strong> Hilfeseite. Verwenden Sie das Seitenleistenmenü für die Navigation. Das System wählt automatisch die besten Routen zum Raffinieren.</p>`,

    es: `<p>Bienvenido a la página de ayuda de <strong>Quartermaster Command</strong>. Usa la barra lateral para navegar. El sistema calcula automáticamente la mejor ruta de fabricación.</p>`,

    it: `<p>Benvenuti in <strong>Quartermaster Command</strong>. Questo sistema calcola automaticamente i requisiti per la raffinazione dei metalli.</p>`,

    ar: `<p>مرحبًا بك في <strong>Quartermaster Command</strong>. استخدم القائمة الجانبية للتنقل.</p>`,

    ro: `<p>Bun venit la <strong>Quartermaster Command</strong>. Sistemul calculează automat cele mai bune rute de rafinare.</p>`,

    pl: `<p>Witamy w <strong>Quartermaster Command</strong>. System automatycznie oblicza najlepsze trasy rafinacji metali.</p>`,

    pt: `<p>Bem-vindo ao <strong>Quartermaster Command</strong>. O sistema calcula automaticamente as melhores rotas de refino.</p>`,

    ru: `<p>Добро пожаловать в <strong>Quartermaster Command</strong>. Система автоматически рассчитывает оптимальные маршруты переработки.</p>`,

    fi: `<p>Tervetuloa <strong>Quartermaster Commandiin</strong>. Järjestelmä laskee optimaaliset jalostusreitit automaattisesti.</p>`,

    uk: `<p>Ласкаво просимо в <strong>Quartermaster Command</strong>. Система автоматично розраховує оптимальні маршрути переробки.</p>`,

    hu: `<p>Üdvözöljük a <strong>Quartermaster Command</strong> súgójában. A rendszer automatikusan kiszámítja a legjobb finomítási útvonalakat.</p>`,

    tr: `<p><strong>Quartermaster Command</strong> yardım sayfasına hoş geldiniz. Sistem en iyi arıtma yollarını otomatik olarak hesaplar.</p>`,

    sv: `<p>Välkommen till <strong>Quartermaster Command</strong>. Systemet beräknar de bästa raffineringsvägarna automatiskt.</p>`,

    cs: `<p>Vítejte v <strong>Quartermaster Command</strong>. Systém automaticky vypočítá nejlepší rafinační cesty.</p>`

};
