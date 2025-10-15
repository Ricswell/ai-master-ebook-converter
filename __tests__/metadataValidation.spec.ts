import { describe, it, expect, beforeEach } from '@jest/globals';

/**
 * Unit Tests für Metadaten-Validierung
 * 
 * Diese Tests überprüfen:
 * - Validierung von Ebook-Metadaten
 * - Pflichtfelder und optionale Felder
 * - Format-Validierung (ISBN, Datum, etc.)
 */

interface EbookMetadata {
  title?: string;
  author?: string;
  isbn?: string;
  publishDate?: string;
  language?: string;
  description?: string;
  publisher?: string;
}

describe('Metadaten-Validierung', () => {
  let metadataValidator: any;

  beforeEach(() => {
    metadataValidator = {
      validate: (metadata: EbookMetadata) => {
        const errors: string[] = [];
        
        if (!metadata.title) errors.push('Titel ist erforderlich');
        if (!metadata.author) errors.push('Autor ist erforderlich');
        
        return {
          valid: errors.length === 0,
          errors
        };
      },
      validateISBN: (isbn: string) => {
        const isbnRegex = /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;
        return isbnRegex.test(isbn);
      },
      validateDate: (date: string) => {
        return !isNaN(Date.parse(date));
      }
    };
  });

  describe('Pflichtfelder-Validierung', () => {
    it('sollte gültige Metadaten mit allen Pflichtfeldern akzeptieren', () => {
      const validMetadata: EbookMetadata = {
        title: 'Test Ebook',
        author: 'Test Author',
        language: 'de',
        publishDate: '2025-10-15'
      };

      const result = metadataValidator.validate(validMetadata);

      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('sollte Fehler bei fehlendem Titel zurückgeben', () => {
      const invalidMetadata: EbookMetadata = {
        author: 'Test Author'
      };

      const result = metadataValidator.validate(invalidMetadata);

      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Titel ist erforderlich');
    });

    it('sollte Fehler bei fehlendem Autor zurückgeben', () => {
      const invalidMetadata: EbookMetadata = {
        title: 'Test Ebook'
      };

      const result = metadataValidator.validate(invalidMetadata);

      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Autor ist erforderlich');
    });

    it('sollte mehrere Fehler gleichzeitig zurückgeben', () => {
      const invalidMetadata: EbookMetadata = {};

      const result = metadataValidator.validate(invalidMetadata);

      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('ISBN-Validierung', () => {
    it('sollte gültige ISBN-10 akzeptieren', () => {
      const validISBN = '0-306-40615-2';
      
      const result = metadataValidator.validateISBN(validISBN);

      expect(result).toBe(true);
    });

    it('sollte gültige ISBN-13 akzeptieren', () => {
      const validISBN = '978-3-16-148410-0';
      
      const result = metadataValidator.validateISBN(validISBN);

      expect(result).toBe(true);
    });

    it('sollte ungültige ISBN ablehnen', () => {
      const invalidISBN = '123-invalid';
      
      const result = metadataValidator.validateISBN(invalidISBN);

      expect(result).toBe(false);
    });

    it('sollte leere ISBN ablehnen', () => {
      const result = metadataValidator.validateISBN('');

      expect(result).toBe(false);
    });
  });

  describe('Datums-Validierung', () => {
    it('sollte gültiges ISO-Datum akzeptieren', () => {
      const validDate = '2025-10-15';
      
      const result = metadataValidator.validateDate(validDate);

      expect(result).toBe(true);
    });

    it('sollte gültiges Datum mit Zeit akzeptieren', () => {
      const validDate = '2025-10-15T14:30:00Z';
      
      const result = metadataValidator.validateDate(validDate);

      expect(result).toBe(true);
    });

    it('sollte ungültiges Datum ablehnen', () => {
      const invalidDate = 'nicht-ein-datum';
      
      const result = metadataValidator.validateDate(invalidDate);

      expect(result).toBe(false);
    });

    it('sollte ungültiges Format ablehnen', () => {
      const invalidDate = '15/10/2025';
      
      const result = metadataValidator.validateDate(invalidDate);

      expect(result).toBe(false);
    });
  });

  describe('Optionale Felder', () => {
    it('sollte Metadaten mit optionalen Feldern validieren', () => {
      const metadataWithOptionals: EbookMetadata = {
        title: 'Test Ebook',
        author: 'Test Author',
        description: 'Eine Testbeschreibung',
        publisher: 'Test Verlag',
        language: 'de'
      };

      const result = metadataValidator.validate(metadataWithOptionals);

      expect(result.valid).toBe(true);
    });

    it('sollte auch ohne optionale Felder validieren', () => {
      const minimalMetadata: EbookMetadata = {
        title: 'Test Ebook',
        author: 'Test Author'
      };

      const result = metadataValidator.validate(minimalMetadata);

      expect(result.valid).toBe(true);
    });
  });
});
