/**
 * Utility function to get the correct asset path with basePath
 */
export const getAssetPath = (path: string): string => {
  // Strip leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/port/${cleanPath}`;
}; 