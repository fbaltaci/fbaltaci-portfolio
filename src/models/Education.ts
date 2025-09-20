/**
 * Represents an education entry
 */
export interface Education {
  /** Degree or program title */
  title: string;
  /** Time period of study (optional for some entries) */
  period?: string;
  /** Educational institution name */
  institution: string;
}
