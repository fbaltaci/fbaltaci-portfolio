/**
 * Represents a project in the portfolio
 */
export interface Project {
  /** Unique identifier for the project */
  id: number;
  /** Project title/name */
  title: string;
  /** Brief description of the project */
  description: string;
  /** Array of technologies/tools used in the project */
  tools: string[];
  /** Array of image paths for project screenshots */
  images: string[];
  /** Repository information */
  repo: {
    /** Display label for the repository link */
    label: string;
    /** URL to the repository */
    url: string;
  };
  /** URL to live demo (empty string if no live demo available) */
  live: string;
  /** Project category/type */
  category: string;
  /** Project completion date */
  date: string;
  /** Detailed description of the project */
  details: string;
}
