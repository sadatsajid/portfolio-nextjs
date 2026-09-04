import React from 'react';

import Script from 'next/script';

const WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const SCRIPT_SRC = process.env.NEXT_PUBLIC_UMAMI_SRC;

/**
 * Umami Cloud page-view tracking. Renders nothing unless both the website id
 * and the script src are configured, so local builds stay clean. Both values
 * come from the Umami dashboard (Settings -> Websites -> Edit -> Tracking code).
 */
export const UmamiAnalytics = () => {
  if (!WEBSITE_ID || !SCRIPT_SRC) {
    return null;
  }

  return (
    <Script
      src={SCRIPT_SRC}
      data-website-id={WEBSITE_ID}
      data-do-not-track="true"
      strategy="afterInteractive"
    />
  );
};
