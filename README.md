# Project: AI4Debunk Chrome Extensie
<img width="1180" alt="Scherm­afbeelding 2024-07-16 om 13 05 59" src="https://github.com/user-attachments/assets/e2693220-9229-43c9-9a19-d2e7c8468580">

### Beschrijving
- Dit is een Chrome Extensie die pagina's kan scannen en kan aangeven of de tekst op de pagina nep nieuws is of niet. Dit gebeurt aan de hand van een waarheidsgetal tussen 0.00 en 1.00.
- De Extensie bevat een 'Scan nu' knop, waarna de score van de website wordt getoond. Je kunt talen selecteren waarbij de tekst van de Extensie verandert op basis van de gemaakte keuze.

### Installatie

#### Vereisten
- Een moderne webbrowser die extensies ondersteunt op Chrom
- De volgende bestanden moeten aanwezig zijn in de projectdirectory:
  - `popup/popup.html`
  - `img/icon.png`
  - `background.js`
  - `content.js`
  - `manifest.json`

#### Stappen

1. **Projectdirectorystructuur**:
   Zorg ervoor dat je projectdirectory er als volgt uitziet:

   ```plaintext
   ai-checker/
   ├── background.js
   ├── content.js
   ├── img/
   │   └── icon.png
   ├── manifest.json
   └── popup/
       └── popup.html
   ```

2. **Bestanden maken**:
   - **manifest.json**: Plaats de volgende inhoud in een bestand genaamd `manifest.json`:
     ```json
     {
       "manifest_version": 3,
       "name": "AI Checker",
       "version": "3.0",
       "description": "Een extension die checkt of informatie waar is.",
       "permissions": ["activeTab", "storage", "scripting", "tabs"],
       "action": {
         "default_popup": "popup/popup.html",
         "default_icon": "img/icon.png"
       },
       "background": {
         "service_worker": "background.js"
       },
       "content_scripts": [
         {
           "matches": ["<all_urls>"],
           "js": ["content.js"]
         }
       ]
     }
     ```
   - **background.js**: Maak een leeg bestand `background.js` of voeg je eigen code toe.
   - **content.js**: Maak een leeg bestand `content.js` of voeg je eigen code toe.
   - **popup/popup.html**: Maak een HTML-bestand `popup.html` in de directory `popup`.
   - **img/icon.png**: Voeg een afbeelding toe genaamd `icon.png` in de directory `img`.

3. **Extensie laden in de browser**:
   - Open je browser (bijvoorbeeld Google Chrome).
   - Ga naar `chrome://extensions/`.
   - Zet de ontwikkelaarsmodus aan door rechtsboven de schakelaar aan te zetten.
   - Klik op "Load unpacked" (Pakket zonder uitpakken laden).
   - Navigeer naar je projectdirectory `ai-checker/` en selecteer deze.

4. **Extensie testen**:
   - Nadat de extensie is geladen, zou je het icoon van de extensie moeten zien in de browserwerkbalk.
   - Klik op het icoon om het pop-upvenster te openen en zorg ervoor dat het correct werkt.
   - Controleer of het content script (`content.js`) correct wordt uitgevoerd op alle pagina's (zoals gespecificeerd in `matches: ["<all_urls>"]`).

### Gebruik
- Klik op het extensie-icoon in de browserwerkbalk om het pop-upvenster te openen.
- De extensie zal automatisch scripts uitvoeren op alle bezochte pagina's volgens de specificaties in `content.js`.

### Bestandenstructuur
De bestandenstructuur van de AI Checker-extensie is als volgt:

```plaintext
ai-checker/
├── background.js
├── content.js
├── img/
│   └── icon.png
├── manifest.json
└── popup/
    └── popup.html
```

### Configuratie
Geen aanvullende configuratie vereist buiten de bestandsspecificaties en projectstructuur.

### Probleemoplossing
- Zorg ervoor dat alle bestanden correct zijn geplaatst volgens de bovenstaande structuur.
- Controleer of de manifest.json correct is geconfigureerd.
- Voor specifieke fouten, gebruik de ontwikkelaarstools van de browser (`F12` of `Ctrl+Shift+I`) om consoleberichten te bekijken.

