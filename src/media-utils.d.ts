export function getAbsoluteHref(baseUrl: string, relativeUrl: string): string;
export function hubIdFromUrl(url: string): URL;
export function changeHub(
  hubId: URL,
  addToHistory: boolean,
  waypoint?: string
): Promise<void>;
