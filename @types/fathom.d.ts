export {}
declare global {
  interface Window {
    fathom: {
      trackGoal: (code: string, cents: number) => void
      blockTrackingForMe: (confirm?: boolean) => void
      enableTrackingForMe: () => void
      trackPageview: ({ url, referrer }: { url?: string; referrer?: string }) => void
    }
  }
}
