/**
 * Tidio Chat Integration Utilities
 * 
 * Environment Variables Required:
 * - NEXT_PUBLIC_TIDIO_PUBLIC_KEY: Your Tidio public key
 * - TIDIO_PRIVATE_KEY: Your Tidio private key (server-side only)
 */

declare global {
  interface Window {
    tidioChatApi?: {
      setVisitorData: (data: VisitorData) => void;
      setColorPalette: (color: string) => void;
      show: () => void;
      hide: () => void;
      open: () => void;
      close: () => void;
      on: (event: string, callback: () => void) => void;
    };
  }
}

export interface VisitorData {
  distinct_id?: string;
  email?: string;
  name?: string;
  phone?: string;
  tags?: string[];
  [key: string]: any; // For custom fields
}

/**
 * Identify a visitor in Tidio chat
 * This should be called after the visitor logs in or when you have their information
 * 
 * @param visitorData - The visitor's information
 * @example
 * identifyTidioVisitor({
 *   distinct_id: '12345',
 *   email: 'user@example.com',
 *   name: 'John Doe',
 *   phone: '+1234567890',
 *   tags: ['customer', 'vip']
 * });
 */
export function identifyTidioVisitor(visitorData: VisitorData): void {
  if (typeof window !== 'undefined' && window.tidioChatApi) {
    try {
      window.tidioChatApi.setVisitorData(visitorData);
      console.log('Tidio visitor identified:', visitorData.email || visitorData.distinct_id);
    } catch (error) {
      console.error('Error identifying Tidio visitor:', error);
    }
  } else {
    console.warn('Tidio chat API not yet loaded. Retrying...');
    // Retry after Tidio loads
    setTimeout(() => identifyTidioVisitor(visitorData), 1000);
  }
}

/**
 * Open the Tidio chat widget programmatically
 */
export function openTidioChat(): void {
  if (typeof window !== 'undefined' && window.tidioChatApi) {
    window.tidioChatApi.open();
  }
}

/**
 * Close the Tidio chat widget programmatically
 */
export function closeTidioChat(): void {
  if (typeof window !== 'undefined' && window.tidioChatApi) {
    window.tidioChatApi.close();
  }
}

/**
 * Show the Tidio chat widget
 */
export function showTidioChat(): void {
  if (typeof window !== 'undefined' && window.tidioChatApi) {
    window.tidioChatApi.show();
  }
}

/**
 * Hide the Tidio chat widget
 */
export function hideTidioChat(): void {
  if (typeof window !== 'undefined' && window.tidioChatApi) {
    window.tidioChatApi.hide();
  }
}

/**
 * Customize the Tidio chat color to match your brand
 * @param color - Hex color code (e.g., '#1a365d')
 */
export function setTidioChatColor(color: string): void {
  if (typeof window !== 'undefined' && window.tidioChatApi) {
    window.tidioChatApi.setColorPalette(color);
  }
}

