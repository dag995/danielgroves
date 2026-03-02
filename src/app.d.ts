import { D1Database } from '@cloudflare/workers-types';

declare global {
 namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  // interface PageState {}
  interface Platform {
    env: {
      DB: danielgrovescouk; // <-- Your Variable name from Step 2 (could be porridge)
    };
  }
 }
}

export {};