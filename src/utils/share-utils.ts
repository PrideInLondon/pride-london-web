type SharePlatform =
  | 'email'
  | 'facebook'
  | 'linked-in'
  | 'messenger'
  | 'twitter'

type ShareContent = {
  /**
   * Required for Email/LinkedIn
   */
  title?: string

  /**
   * Required for Email/LinkedIn/Twitter
   */
  body?: string

  /**
   * Required for Facebook/LinkedIn
   */
  url?: string
}

const generateQueryParams = (params: any) =>
  Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join('&')

export const generateShareUrl = (
  platform: SharePlatform,
  { title, body, url }: ShareContent
) => {
  switch (platform) {
    case 'email': {
      return `mailto:?${generateQueryParams({ subject: title, body })}`
    }
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?${generateQueryParams({
        u: url,
      })}`
    case 'linked-in':
      return `https://www.linkedin.com/shareArticle?${generateQueryParams({
        title,
        summary: body,
        url,
        source: 'prideinlondon.org',
      })}`
    case 'messenger':
      return null
    case 'twitter':
      return `https://twitter.com/intent/tweet?${generateQueryParams({
        text: body,
      })}`
  }
}
