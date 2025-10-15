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
- [ ] **Cloud-Synchronisation**: Plattformübergreifende Projektynchronisation
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
- [ ] **Feedback-Integration**: Direktes Feedback von Beta-Lesern

### 🔄 Automatisierung
- [ ] **Workflow-Automation**: Automatisierte Publikationspipelines
- [ ] **Scheduled Tasks**: Geplante Exports und Backups
- [ ] **API-Integration**: Anbindung an Publishing-Plattformen
- [ ] **Bulk Operations**: Massenoperationen für mehrere Bücher
- [ ] **Smart Templates**: KI-unterstützte Template-Generierung

### 📝 Erweiterte Editier-Features
- [ ] **Inhaltsverzeichnis-Generator**: Automatische TOC-Erstellung
- [ ] **Rechtschreibprüfung**: Mehrsprachige Rechtschreibkontrolle
- [ ] **Vorschau-Modus**: Live-Vorschau in verschiedenen Formaten
- [ ] **WYSIWYG-Editor**: Visual Editor mit Markdown-Support
- [ ] **Syntax-Highlighting**: Code-Highlighting für technische Bücher

## 🛠️ Technische Architektur

### Frontend
- **React 18+**: Moderne UI-Komponenten
- **TypeScript**: Typsichere Entwicklung
- **Tailwind CSS**: Utility-First CSS Framework
- **Zustand**: State Management
- **React Query**: Daten-Fetching und Caching

### Backend
- **Node.js**: Server-Runtime
- **Express.js**: Web-Framework
- **PostgreSQL**: Hauptdatenbank
- **Redis**: Caching und Session-Management
- **AWS S3**: File Storage

### Testing & CI/CD
- **Jest**: Unit Testing
- **Cypress**: E2E Testing
- **GitHub Actions**: Continuous Integration
- **Docker**: Containerisierung
- **Vercel**: Deployment Platform

## 📦 Installation & Setup

### Voraussetzungen
- Node.js 18+
- npm oder yarn
- Docker (optional)
- Git

### Lokale Entwicklung
```bash
# Repository klonen
git clone https://github.com/Ricswell/ai-master-ebook-converter.git
cd ai-master-ebook-converter

# Dependencies installieren
npm install

# Umgebungsvariablen konfigurieren
cp .env.example .env

# Datenbank initialisieren
npm run db:init

# Development Server starten
npm run dev
```

### Docker Setup
```bash
# Docker Container bauen und starten
docker-compose up --build

# Datenbank migrieren
docker-compose exec app npm run db:migrate
```

### Automatisierte Tests einrichten

#### Unit Tests
```bash
# Alle Tests ausführen
npm test

# Tests mit Coverage
npm run test:coverage

# Tests in Watch-Mode
npm run test:watch
```

#### E2E Tests
```bash
# Cypress Tests interaktiv
npm run test:e2e

# Cypress Tests headless
npm run test:e2e:ci
```

#### Continuous Integration
Die CI/CD Pipeline wird automatisch über GitHub Actions ausgeführt:

1. **Code Quality Checks**: Linting, Type-Checking
2. **Unit Tests**: Jest mit Coverage-Report
3. **E2E Tests**: Cypress Tests in verschiedenen Browsern
4. **Build Verification**: Erfolgreicher Build-Check
5. **Security Scan**: Dependency Vulnerability Check

## 📖 Wiki einrichten

Das Wiki enthält detaillierte Dokumentation und Anleitungen:

### Wiki-Struktur erstellen
1. Gehe zu [Wiki-Tab](https://github.com/Ricswell/ai-master-ebook-converter/wiki)
2. Erstelle folgende Seiten:
   - **Home**: Projektübersicht und Schnellstart
   - **User Guide**: Benutzerhandbuch
   - **API Documentation**: API-Referenz
   - **Development Guide**: Entwicklerdokumentation
   - **Troubleshooting**: Häufige Probleme und Lösungen
   - **Release Notes**: Changelog und Versionshistorie

### Wiki automatisch aktualisieren
```bash
# Wiki-Generator Script
npm run wiki:generate

# Automatische API-Docs Generierung
npm run docs:api
```

## 🐛 Issues erstellen

### Bug Reports
Wenn du einen Bug findest, erstelle ein Issue mit folgenden Informationen:

```markdown
**Bug Beschreibung**
Eine klare und präzise Beschreibung des Bugs.

**Reproduktion**
Schritte zur Reproduktion des Verhaltens:
1. Gehe zu '...'
2. Klicke auf '...'
3. Scrolle nach '...'
4. Sieh den Fehler

**Erwartetes Verhalten**
Eine klare und präzise Beschreibung dessen, was erwartet wurde.

**Screenshots**
Falls zutreffend, füge Screenshots hinzu, um das Problem zu erklären.

**Umgebung:**
- OS: [z.B. iOS]
- Browser: [z.B. chrome, safari]
- Version: [z.B. 22]

**Zusätzlicher Kontext**
Füge hier weitere Informationen über das Problem hinzu.
```

### Feature Requests
Für neue Features verwende folgende Vorlage:

```markdown
**Feature Beschreibung**
Eine klare und präzise Beschreibung des gewünschten Features.

**Problem/Motivation**
Welches Problem löst dieses Feature? Welchen Nutzen bringt es?

**Vorgeschlagene Lösung**
Eine klare und präzise Beschreibung der gewünschten Implementierung.

**Alternativen**
Eine klare und präzise Beschreibung von Alternativen, die du bedacht hast.

**Zusätzlicher Kontext**
Füge Screenshots, Mockups oder weitere Informationen hinzu.
```

### Issue Labels
Verwende folgende Labels für bessere Organisation:
- `bug`: Bestätigte Bugs
- `enhancement`: Neue Features
- `documentation`: Dokumentation
- `help wanted`: Community-Hilfe erwünscht
- `good first issue`: Geeignet für neue Contributors
- `priority:high`: Hohe Priorität
- `priority:medium`: Mittlere Priorität
- `priority:low`: Niedrige Priorität

## 🔄 Pull Requests

### Entwicklungsworkflow
1. **Fork** das Repository
2. **Clone** deinen Fork lokal
3. **Branch** von main: `git checkout -b feature/amazing-feature`
4. **Commit** deine Änderungen: `git commit -m 'Add amazing feature'`
5. **Push** zum Branch: `git push origin feature/amazing-feature`
6. Öffne einen **Pull Request**

### Pull Request Guidelines
- **Atomic Commits**: Ein PR sollte ein Feature/Fix enthalten
- **Tests**: Neue Features müssen getestet werden
- **Documentation**: Code muss dokumentiert sein
- **Code Style**: Befolge die Coding Standards
- **Review**: Mindestens eine Review erforderlich

### Code Review Checkliste
- [ ] Code funktioniert korrekt
- [ ] Tests vorhanden und bestehen
- [ ] Dokumentation aktualisiert
- [ ] Code Style eingehalten
- [ ] Keine Sicherheitslücken
- [ ] Performance berücksichtigt
- [ ] Accessibility beachtet

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
