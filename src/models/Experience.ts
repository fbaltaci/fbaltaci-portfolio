/**
 * Represents a work experience entry
 */
export interface Experience {
  /** Job title/position */
  title: string;
  /** Company name */
  company: string;
  /** Employment period */
  period: string;
  /** Array of key responsibilities and achievements */
  bullets: string[];
}
