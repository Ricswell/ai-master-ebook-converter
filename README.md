# AI Master eBook Converter

## 💡 Spare Zeit beim eBook-Release!

**Der KI-basierte Converter validiert und konvertiert alle gängigen Formate vollautomatisch. Perfekt für Self-Publisher – inklusive Amazon KDP-Check und direkter Vorschau.**

![AI Master eBook Converter Demo](./assets/demo.gif)
*Screenshot/GIF: Bitte füge hier einen Screenshot oder ein GIF der Anwendung ein, um die Bedienung zu zeigen*

---

## 🚀 Quick Start

### Installation

Installiere direkt über npm:

```bash
npm i ai-master-ebook-converter
```

Oder klone das Repository:

```bash
git clone https://github.com/Ricswell/ai-master-ebook-converter.git
cd ai-master-ebook-converter
npm install
npm run dev
```

---

## ⭐ Feature-Highlights

### 🎯 Kernfunktionen

- ✅ **Vollautomatische Format-Konvertierung** – EPUB, MOBI, PDF mit einem Klick
- ✅ **Amazon KDP-Validierung** – Prüfe dein eBook vor dem Upload auf KDP-Konformität
- ✅ **Live-Vorschau** – Sieh dein eBook in Echtzeit während der Bearbeitung
- ✅ **KI-gestützte Qualitätskontrolle** – Automatische Fehlerprüfung und Optimierungsvorschläge
- ✅ **Metadaten-Management** – ISBN, Copyright, Cover, Kategorien – alles an einem Ort
- ✅ **Multi-Format Batch-Export** – Exportiere gleichzeitig in alle Formate

### 🔧 Erweiterte Features

- 📚 **Umfassender Format-Support** – EPUB 2/3, MOBI, PDF, und mehr
- 🏷️ **Professionelle Metadaten-Verwaltung** – Titel, Autor, ISBN, Cover, Tags
- ✅ **Strenge Validierung** – EPUBCheck-Integration und Accessibility-Checks
- 💾 **Automatisches Speichern** – Cloud-Sync und lokale Backups
- 🤝 **Kollaboration** – Multi-User-Support und Kommentarfunktion
- 🎨 **Moderne UI/UX** – Intuitive Bedienung mit Dark Mode
- 🔐 **Datenschutz** – Lokale Verarbeitung, keine Daten-Upload

---

## 📖 Über das Projekt

AI Master eBook Converter ist eine moderne, webbasierte Lösung für Self-Publisher, die ihre eBooks professionell erstellen, konvertieren und validieren möchten. Die Anwendung bietet eine intuitive Benutzeroberfläche und unterstützt alle wichtigen eBook-Formate.

### Warum AI Master eBook Converter?

- ⏱️ **Zeitersparnis** – Automatisiere repetitive Aufgaben
- 🎯 **Qualitätssicherung** – Verhindere Fehler vor der Veröffentlichung
- 💰 **Kosteneffizient** – Open Source und kostenlos nutzbar
- 🚀 **Publishing-Ready** – Direkt optimiert für Amazon KDP, Apple Books & Co.

---

## ✨ Aktuelle Features

### 📚 Import/Export

- [ ] **EPUB Import**: Importieren bestehender EPUB-Dateien zur Bearbeitung
- [ ] **EPUB Export**: Professionelle EPUB-Erstellung mit korrekter Struktur
- [ ] **MOBI-Erstellung (Kindle)**: Optimierung für Amazon Kindle - [Issue #1](https://github.com/Ricswell/ai-master-ebook-converter/issues/1)
- [ ] **PDF Export**: Hochwertige PDF-Ausgabe für Print-on-Demand
- [ ] **Multi-Format Batch-Export**: Gleichzeitiger Export in mehrere Formate

### 🏷️ Metadaten-Management

- [ ] **Titel, Autor, Sprache**: Vollständige Metadaten-Bearbeitung
- [ ] **Cover-Integration**: Einbindung und Optimierung von Cover-Bildern
- [ ] **ISBN-Verwaltung**: Automatische ISBN-Formatierung und -Validierung
- [ ] **Kategorien & Tags**: Umfassende Kategorisierung für bessere Auffindbarkeit
- [ ] **Copyright-Management**: Automatische Copyright-Informationen

### 💾 Persistenz & Speicherung

- [ ] **LocalStorage-Integration**: Lokale Zwischenspeicherung von Projekten
- [ ] **IndexedDB-Support**: Erweiterte lokale Datenbankfunktionen
- [ ] **Cloud-Synchronisation**: Plattformübergreifende Projektsynchronisation
- [ ] **Auto-Save**: Automatisches Speichern während der Bearbeitung
- [ ] **Backup-System**: Automatische Projekt-Backups

### ✅ Validierung & Qualitätskontrolle

- [ ] **Strenge EPUB-Validierung**: Integration von epubcheck - [Issue #2](https://github.com/Ricswell/ai-master-ebook-converter/issues/2)
- [ ] **KDP-Standards-Prüfung**: Amazon Kindle Direct Publishing Konformität
- [ ] **Accessibility-Check**: WCAG-konforme eBook-Erstellung
- [ ] **Link-Validierung**: Überprüfung aller internen und externen Links
- [ ] **Format-Konsistenz**: Automatische Stilkonsistenz-Prüfung

### 🤝 Community & Kollaboration

- [ ] **Multi-User Support**: Mehrere Benutzer pro Projekt
- [ ] **Kommentar-System**: Feedback und Anmerkungen zu Kapiteln
- [ ] **Version Control**: Integrierte Versionsverwaltung für Projekte
- [ ] **Template-Sharing**: Community-Templates für verschiedene Genres
- [ ] **Export-Presets**: Vordefinierte Einstellungen für verschiedene Plattformen

### 🎨 UI/UX

- [ ] **Dark/Light Mode**: Benutzerfreundliches Theme-Switching
- [ ] **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- [ ] **Drag & Drop**: Intuitive Datei-Uploads
- [ ] **Real-time Preview**: Live-Vorschau während der Bearbeitung
- [ ] **Keyboard Shortcuts**: Effiziente Tastatursteuerung
- [ ] **Multi-Language Support**: Unterstützung mehrerer Sprachen

### 🔐 Sicherheit & Datenschutz

- [ ] **Lokale Verarbeitung**: Keine Server-Uploads erforderlich
- [ ] **Verschlüsselung**: End-to-End Verschlüsselung für Cloud-Features
- [ ] **DSGVO-konform**: Europäische Datenschutz-Standards
- [ ] **Audit Logs**: Nachvollziehbare Änderungshistorie

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/ui
- **State Management**: Zustand
- **File Processing**: epub.js, pdf-lib
- **Validation**: epubcheck (WASM)
- **Testing**: Vitest, React Testing Library, Playwright
- **Deployment**: Vercel

---

## 📦 Installation & Setup

### Voraussetzungen

- Node.js 18+ und npm/yarn/pnpm
- Git

### Schritt-für-Schritt Installation

1. **Repository klonen**
   ```bash
   git clone https://github.com/Ricswell/ai-master-ebook-converter.git
   cd ai-master-ebook-converter
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm run dev
   ```

4. **Browser öffnen**
   Öffne http://localhost:5173

### Verfügbare Scripts

```bash
npm run dev          # Entwicklungsserver starten
npm run build        # Produktions-Build erstellen
npm run preview      # Produktions-Build lokal testen
npm run test         # Tests ausführen
npm run test:ui      # Tests mit UI ausführen
npm run test:e2e     # End-to-End Tests ausführen
npm run lint         # Code-Qualität prüfen
npm run type-check   # TypeScript-Typen prüfen
```

---

## 🧪 Automatisierte Tests einrichten

### Unit & Integration Tests

```bash
# Tests einmalig ausführen
npm run test

# Tests im Watch-Mode
npm run test:watch

# Tests mit Coverage Report
npm run test:coverage

# Tests mit UI
npm run test:ui
```

### End-to-End Tests

```bash
# Playwright installieren
npx playwright install

# E2E Tests ausführen
npm run test:e2e

# E2E Tests im UI-Mode
npm run test:e2e:ui
```

### Continuous Integration

Das Projekt nutzt GitHub Actions für automatisierte Tests bei jedem Push und Pull Request.

---

## 🔄 Workflow

### Branching Strategy

Wir verwenden Git Flow:

- `main`: Produktions-Branch (stable releases)
- `develop`: Development-Branch (next release)
- `feature/*`: Neue Features
- `bugfix/*`: Bug Fixes
- `hotfix/*`: Kritische Fixes
- `release/*`: Release-Vorbereitung

### Contribution Workflow

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Committe deine Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

---

## 📊 Projekt-Status

### Roadmap

- **Q1 2024**: Basis-Import/Export Funktionalität
- **Q2 2024**: Erweiterte Validierung und Metadaten
- **Q3 2024**: Cloud-Integration und Multi-User Support
- **Q4 2024**: Automatisierung und API-Integration

### Metriken

- **Test Coverage**: Ziel 90%+
- **Performance**: < 2s Ladezeit
- **Accessibility**: WCAG 2.1 AA konform
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

---

## 🤝 Mitwirken

Beiträge sind herzlich willkommen! Siehe [CONTRIBUTING.md](CONTRIBUTING.md) für detaillierte Guidelines.

### Code of Conduct

Dieses Projekt folgt dem [Contributor Covenant](https://www.contributor-covenant.org/) Code of Conduct.

### Contributors

Vielen Dank an alle Contributors, die zu diesem Projekt beitragen!

---

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe [LICENSE](LICENSE) für Details.

---

## 🔗 Links

- [Live Demo](https://ai-master-ebook-converter.vercel.app)
- [Documentation](https://github.com/Ricswell/ai-master-ebook-converter/wiki)
- [Issue Tracker](https://github.com/Ricswell/ai-master-ebook-converter/issues)
- [Discussions](https://github.com/Ricswell/ai-master-ebook-converter/discussions)

---

## 📞 Kontakt

- **Autor**: Ricswell
- **Email**: [Kontakt über GitHub Issues](https://github.com/Ricswell/ai-master-ebook-converter/issues)
- **Twitter**: [@ricswell](https://twitter.com/ricswell)

---

## 🎯 Call to Action

### ⭐ Starre das Repo!

Wenn dir dieses Projekt gefällt, gib ihm einen Stern! Das hilft anderen Self-Publishern, dieses Tool zu finden.

### 💬 Teile dein Feedback!

Hast du Vorschläge, Verbesserungsideen oder Feedback? Öffne ein [Issue](https://github.com/Ricswell/ai-master-ebook-converter/issues) oder starte eine [Discussion](https://github.com/Ricswell/ai-master-ebook-converter/discussions).

### 🚀 Schicke Feature-Wünsche!

Vermisst du eine Funktion? Lass es uns wissen! Erstelle ein [Feature Request](https://github.com/Ricswell/ai-master-ebook-converter/issues/new?template=feature_request.md) und wir schauen, was wir tun können.

### 🤝 Werde Contributor!

Möchtest du aktiv mitgestalten? Wir freuen uns über jeden Beitrag – ob Code, Dokumentation, Tests oder Design!

---

**Happy Publishing! 📚✨**
