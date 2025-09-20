/**
 * Represents contact information item
 */
export interface ContactInfo {
  /** Bootstrap icon class name */
  icon: string;
  /** Display title for the contact method */
  title: string;
  /** Contact information text (phone, email, username, etc.) */
  text: string;
  /** Optional URL link for clickable contact methods */
  link?: string;
  /** Animation delay in milliseconds */
  delay: number;
}
