# AI Master eBook Converter
Eine umfassende Web-Anwendung zum Konvertieren, Validieren und Verwalten von eBooks für Self-Publisher.

## 🚀 Über das Projekt
AI Master eBook Converter ist eine moderne, webbasierte Lösung für Self-Publisher, die ihre eBooks professionell erstellen, konvertieren und validieren möchten. Die Anwendung bietet eine intuitive Benutzeroberfläche und unterstützt alle wichtigen eBook-Formate.

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
- [ ] **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- [ ] **Dark Mode**: Augenfreundliche Benutzeroberfläche
- [ ] **Drag & Drop**: Intuitive Datei-Uploads
- [ ] **Live Preview**: Echtzeit-Vorschau während der Bearbeitung
- [ ] **Keyboard Shortcuts**: Produktive Tastaturkürzel
- [ ] **Customizable Workspace**: Anpassbare Arbeitsbereiche

### 🔐 Sicherheit & Datenschutz
- [ ] **Ende-zu-Ende-Verschlüsselung**: Sichere Datenübertragung
- [ ] **DSGVO-Konformität**: Europäische Datenschutz-Richtlinien
- [ ] **Zwei-Faktor-Authentifizierung**: Erhöhte Account-Sicherheit
- [ ] **Privacy by Design**: Datenschutz-fokussierte Architektur
- [ ] **Audit Logs**: Protokollierung kritischer Aktionen

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (React)
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form + Zod

### Backend
- **Runtime**: Node.js
- **API**: RESTful + GraphQL (geplant)
- **Database**: PostgreSQL + Redis
- **ORM**: Prisma

### DevOps
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry
- **Analytics**: Posthog

## 📦 Installation & Setup

### Voraussetzungen
```bash
# Node.js 18+ und npm/pnpm
node --version  # v18.0.0 oder höher
```

### Lokale Entwicklung
```bash
# Repository klonen
git clone https://github.com/Ricswell/ai-master-ebook-converter.git
cd ai-master-ebook-converter

# Abhängigkeiten installieren
npm install
# oder
pnpm install

# Umgebungsvariablen einrichten
cp .env.example .env.local
# .env.local mit eigenen Werten füllen

# Entwicklungsserver starten
npm run dev
# Anwendung läuft auf http://localhost:3000
```

### Environment Variables
```env
# .env.local
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## 🧪 Automatisierte Tests einrichten

### Unit Tests

Das Projekt enthält umfassende Unit-Test-Vorlagen für die Kernfunktionalitäten:

#### Test-Dateien im `__tests__/` Verzeichnis:

1. **`epubExport.spec.ts`** - EPUB-Export-Funktionalität
   - EPUB-Datei-Generierung mit korrekten Metadaten
   - Fehlerbehandlung bei ungültigen Eingaben
   - Mehrkapitel-Verarbeitung
   - EPUB-Struktur-Validierung
   - Dateisystem-Export

2. **`metadataValidation.spec.ts`** - Metadaten-Validierung
   - Pflichtfeld-Validierung (Titel, Autor)
   - ISBN-Format-Validierung (ISBN-10 und ISBN-13)
   - Datums-Validierung (ISO-Format)
   - Optionale Felder (Beschreibung, Verlag, Sprache)

3. **`tocGenerator.spec.ts`** - Inhaltsverzeichnis-Erstellung
   - Automatische TOC-Generierung aus Kapiteln
   - Hierarchische Strukturierung (mehrstufig)
   - HTML-Navigation-Generierung
   - Anker-Link-Erstellung

#### Tests ausführen:

```bash
# Alle Tests ausführen
npm test

# Tests im Watch-Modus
npm test -- --watch

# Spezifische Test-Datei ausführen
npm test epubExport.spec.ts

# Test-Coverage anzeigen
npm test -- --coverage
```

#### Beispiel-Test-Ausgabe:

```bash
 PASS  __tests__/epubExport.spec.ts
  EPUB Export
    EPUB-Generierung
      ✓ sollte eine gültige EPUB-Datei mit korrekten Metadaten erstellen (3 ms)
      ✓ sollte Fehler bei fehlenden Metadaten behandeln (2 ms)
      ✓ sollte mehrere Kapitel korrekt verarbeiten (1 ms)
    EPUB-Validierung
      ✓ sollte eine gültige EPUB-Struktur validieren (1 ms)
      ✓ sollte ungültige EPUB-Struktur erkennen (1 ms)

Test Suites: 3 passed, 3 total
Tests:       24 passed, 24 total
Time:        2.345s
```

### E2E Tests

```bash
# Playwright E2E Tests
npm run test:e2e

# E2E Tests im UI-Modus
npm run test:e2e:ui
```

### Continuous Integration

Automatische Tests laufen bei jedem Push und Pull Request:

```yaml
# .github/workflows/test.yml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm test
      - run: npm run test:e2e
```

## 🔄 Workflow

### Feature-Entwicklung
```bash
# Neuen Feature-Branch erstellen
git checkout -b feature/neue-funktion

# Änderungen committen
git add .
git commit -m "feat: Neue Funktion hinzugefügt"

# Push und Pull Request erstellen
git push origin feature/neue-funktion
```

### Commit-Konventionen
Wir folgen [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Neue Features
- `fix:` Bug Fixes
- `docs:` Dokumentation
- `style:` Formatierung
- `refactor:` Code-Umstrukturierung
- `test:` Tests
- `chore:` Wartungsarbeiten

### Branch-Strategie
- `main`: Produktions-ready Code
- `develop`: Integration Branch
- `feature/*`: Neue Features
- `bugfix/*`: Bug Fixes
- `hotfix/*`: Kritische Fixes
- `release/*`: Release-Vorbereitung

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

## 🤝 Mitwirken

Beiträge sind herzlich willkommen! Siehe [CONTRIBUTING.md](CONTRIBUTING.md) für detaillierte Guidelines.

### Code of Conduct
Dieses Projekt folgt dem [Contributor Covenant](https://www.contributor-covenant.org/) Code of Conduct.

### Contributors
Vielen Dank an alle Contributors, die zu diesem Projekt beitragen!

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe [LICENSE](LICENSE) für Details.

## 🔗 Links

- [Live Demo](https://ai-master-ebook-converter.vercel.app)
- [Documentation](https://github.com/Ricswell/ai-master-ebook-converter/wiki)
- [Issue Tracker](https://github.com/Ricswell/ai-master-ebook-converter/issues)
- [Discussions](https://github.com/Ricswell/ai-master-ebook-converter/discussions)

## 📞 Kontakt

- **Autor**: Ricswell
- **Email**: [Kontakt über GitHub Issues](https://github.com/Ricswell/ai-master-ebook-converter/issues)
- **Twitter**: [@ricswell](https://twitter.com/ricswell)

---

⭐ Vergiss nicht, dem Projekt einen Stern zu geben, wenn es dir gefällt!
