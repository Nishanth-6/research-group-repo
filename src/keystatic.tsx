import React from 'react';
import { createRoot } from 'react-dom/client';
import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import keystaticConfig from '../keystatic.config';

// This would be used if we had API routes, but for now we'll use GitHub mode
// which doesn't need API routes
export const handler = makeGenericAPIRouteHandler({
  config: keystaticConfig,
});

// For the admin UI, we'll dynamically import it
async function loadAdmin() {
  const { Keystatic } = await import('@keystatic/core/ui');
  return <Keystatic config={keystaticConfig} />;
}

export default loadAdmin;
