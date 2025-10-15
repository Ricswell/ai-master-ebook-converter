import { describe, it, expect, beforeEach } from '@jest/globals';

/**
 * Unit Tests für Inhaltsverzeichnis-Generierung
 * 
 * Diese Tests validieren:
 * - Automatische TOC-Erstellung aus Kapiteln
 * - Hierarchische Strukturierung
 * - Navigation und Verlinkung
 */

interface Chapter {
  id: string;
  title: string;
  level: number;
  children?: Chapter[];
}

interface TOC {
  entries: TOCEntry[];
  depth: number;
}

interface TOCEntry {
  id: string;
  title: string;
  level: number;
  page?: number;
  href?: string;
  children?: TOCEntry[];
}

describe('Inhaltsverzeichnis-Generator', () => {
  let tocGenerator: any;

  beforeEach(() => {
    tocGenerator = {
      generate: (chapters: Chapter[]) => {
        const entries: TOCEntry[] = chapters.map(ch => ({
          id: ch.id,
          title: ch.title,
          level: ch.level,
          href: `#${ch.id}`,
          children: ch.children?.map(sub => ({
            id: sub.id,
            title: sub.title,
            level: sub.level,
            href: `#${sub.id}`
          }))
        }));

        return {
          entries,
          depth: Math.max(...chapters.map(ch => ch.level))
        };
      },
      validateStructure: (toc: TOC) => {
        return toc.entries.length > 0 && toc.depth >= 1;
      },
      generateHTML: (toc: TOC) => {
        return `<nav class="toc"><ul>${toc.entries.map(e => `<li>${e.title}</li>`).join('')}</ul></nav>`;
      }
    };
  });

  describe('TOC-Generierung', () => {
    it('sollte einfaches Inhaltsverzeichnis aus Kapiteln erstellen', () => {
      const chapters: Chapter[] = [
        { id: 'ch1', title: 'Kapitel 1', level: 1 },
        { id: 'ch2', title: 'Kapitel 2', level: 1 },
        { id: 'ch3', title: 'Kapitel 3', level: 1 }
      ];

      const result = tocGenerator.generate(chapters);

      expect(result.entries).toHaveLength(3);
      expect(result.depth).toBe(1);
      expect(result.entries[0].title).toBe('Kapitel 1');
    });

    it('sollte hierarchisches Inhaltsverzeichnis mit Unterkapiteln erstellen', () => {
      const chapters: Chapter[] = [
        {
          id: 'ch1',
          title: 'Kapitel 1',
          level: 1,
          children: [
            { id: 'ch1-1', title: 'Unterkapitel 1.1', level: 2 },
            { id: 'ch1-2', title: 'Unterkapitel 1.2', level: 2 }
          ]
        },
        { id: 'ch2', title: 'Kapitel 2', level: 1 }
      ];

      const result = tocGenerator.generate(chapters);

      expect(result.entries).toHaveLength(2);
      expect(result.entries[0].children).toHaveLength(2);
      expect(result.depth).toBe(2);
    });

    it('sollte leeres TOC für leere Kapitelliste erstellen', () => {
      const chapters: Chapter[] = [];

      const result = tocGenerator.generate(chapters);

      expect(result.entries).toHaveLength(0);
      expect(result.depth).toBe(-Infinity);
    });

    it('sollte korrekte Anker-Links generieren', () => {
      const chapters: Chapter[] = [
        { id: 'intro', title: 'Einleitung', level: 1 },
        { id: 'main', title: 'Hauptteil', level: 1 }
      ];

      const result = tocGenerator.generate(chapters);

      expect(result.entries[0].href).toBe('#intro');
      expect(result.entries[1].href).toBe('#main');
    });
  });

  describe('TOC-Struktur-Validierung', () => {
    it('sollte gültige TOC-Struktur erkennen', () => {
      const validTOC: TOC = {
        entries: [
          { id: '1', title: 'Kapitel 1', level: 1 },
          { id: '2', title: 'Kapitel 2', level: 1 }
        ],
        depth: 1
      };

      const result = tocGenerator.validateStructure(validTOC);

      expect(result).toBe(true);
    });

    it('sollte leeres TOC als ungültig erkennen', () => {
      const invalidTOC: TOC = {
        entries: [],
        depth: 0
      };

      const result = tocGenerator.validateStructure(invalidTOC);

      expect(result).toBe(false);
    });

    it('sollte TOC mit zu geringer Tiefe ablehnen', () => {
      const invalidTOC: TOC = {
        entries: [{ id: '1', title: 'Kapitel', level: 1 }],
        depth: 0
      };

      const result = tocGenerator.validateStructure(invalidTOC);

      expect(result).toBe(false);
    });
  });

  describe('TOC-HTML-Generierung', () => {
    it('sollte HTML-Navigation aus TOC generieren', () => {
      const toc: TOC = {
        entries: [
          { id: '1', title: 'Kapitel 1', level: 1 },
          { id: '2', title: 'Kapitel 2', level: 1 }
        ],
        depth: 1
      };

      const html = tocGenerator.generateHTML(toc);

      expect(html).toContain('<nav class="toc">');
      expect(html).toContain('Kapitel 1');
      expect(html).toContain('Kapitel 2');
    });

    it('sollte gültiges HTML-Markup erzeugen', () => {
      const toc: TOC = {
        entries: [{ id: '1', title: 'Test', level: 1 }],
        depth: 1
      };

      const html = tocGenerator.generateHTML(toc);

      expect(html).toMatch(/<nav[^>]*>.*<\/nav>/);
      expect(html).toContain('<ul>');
      expect(html).toContain('</ul>');
    });

    it('sollte leeres TOC als leere Navigation rendern', () => {
      const toc: TOC = {
        entries: [],
        depth: 0
      };

      const html = tocGenerator.generateHTML(toc);

      expect(html).toContain('<nav class="toc">');
      expect(html).toContain('<ul></ul>');
    });
  });

  describe('Komplexe Szenarien', () => {
    it('sollte mehrstufige Hierarchie korrekt verarbeiten', () => {
      const chapters: Chapter[] = [
        {
          id: 'ch1',
          title: 'Teil 1',
          level: 1,
          children: [
            {
              id: 'ch1-1',
              title: 'Kapitel 1.1',
              level: 2,
              children: [
                { id: 'ch1-1-1', title: 'Abschnitt 1.1.1', level: 3 }
              ]
            }
          ]
        }
      ];

      const result = tocGenerator.generate(chapters);

      expect(result.entries).toHaveLength(1);
      expect(result.entries[0].children).toHaveLength(1);
      expect(result.entries[0].children?.[0].children).toHaveLength(1);
      expect(result.depth).toBe(3);
    });

    it('sollte großes Ebook mit vielen Kapiteln verarbeiten', () => {
      const chapters: Chapter[] = Array.from({ length: 50 }, (_, i) => ({
        id: `ch${i + 1}`,
        title: `Kapitel ${i + 1}`,
        level: 1
      }));

      const result = tocGenerator.generate(chapters);

      expect(result.entries).toHaveLength(50);
      expect(result.depth).toBe(1);
    });

    it('sollte gemischte Level-Struktur handhaben', () => {
      const chapters: Chapter[] = [
        { id: 'ch1', title: 'Kapitel 1', level: 1 },
        { id: 'ch2', title: 'Kapitel 2', level: 2 },
        { id: 'ch3', title: 'Kapitel 3', level: 1 }
      ];

      const result = tocGenerator.generate(chapters);

      expect(result.entries).toHaveLength(3);
      expect(result.depth).toBe(2);
    });
  });
});
