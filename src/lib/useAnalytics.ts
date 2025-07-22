"use client";

import { trackEvent } from "@/lib/analytics";

export const useAnalytics = () => {
  // Track button clicks
  const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent('click', 'button', `${buttonName}${location ? ` - ${location}` : ''}`, 1);
  };

  // Track form submissions
  const trackFormSubmit = (formName: string) => {
    trackEvent('submit', 'form', formName, 1);
  };

  // Track page views (for SPA navigation)
  const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };

  // Track demo requests
  const trackDemoRequest = (source: string) => {
    trackEvent('demo_request', 'conversion', source, 1);
  };

  // Track trial starts
  const trackTrialStart = (source: string) => {
    trackEvent('trial_start', 'conversion', source, 1);
  };

  // Track contact form
  const trackContactForm = (source: string) => {
    trackEvent('contact_form', 'conversion', source, 1);
  };

  // Track video plays
  const trackVideoPlay = (videoName: string) => {
    trackEvent('play', 'video', videoName, 1);
  };

  // Track downloads
  const trackDownload = (fileName: string) => {
    trackEvent('download', 'file', fileName, 1);
  };

  return {
    trackButtonClick,
    trackFormSubmit,
    trackPageView,
    trackDemoRequest,
    trackTrialStart,
    trackContactForm,
    trackVideoPlay,
    trackDownload,
  };
};