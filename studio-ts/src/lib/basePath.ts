export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/python-ai-solutions-website' : ''
}

export function getAssetPath(path: string) {
  return `${getBasePath()}${path}`
} 