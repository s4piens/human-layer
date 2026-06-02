"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init("phc_sZBiFaYZ4RoifUtrwYBroVoNJNVQWEss3fanC9XE3zhR", {
      api_host: "https://eu.i.posthog.com",
      person_profiles: "identified_only",
      capture_pageview: true,
      capture_pageleave: true,
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
