export type SharePlatform =
  | 'email'
  | 'facebook'
  | 'linked-in'
  | 'messenger'
  | 'twitter'

export interface ShareContent {
  /**
   * Required for Email/LinkedIn
   */
  title: string

  /**
   * Required for Email/LinkedIn/Twitter
   */
  body: string

  /**
   * Required for Facebook/LinkedIn
   */
  url: string
}

const generateQueryParams = (params: any) =>
  Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join('&')

export const generateShareUrl = (
  platform: SharePlatform,
  { title, body, url }: ShareContent
): string => {
  switch (platform) {
    case 'email': {
      return `mailto:?${generateQueryParams({ subject: title, body })}`
    }
    case 'facebook':
    case 'messenger':
      return `https://www.facebook.com/sharer/sharer.php?${generateQueryParams({
        u: url,
        app_id: process.env.GATSBY_FACEBOOK_APP_ID,
      })}`
    case 'linked-in':
      return `https://www.linkedin.com/shareArticle?${generateQueryParams({
        title,
        summary: body,
        url,
        source: 'prideinlondon.org',
      })}`
    case 'twitter':
      return `https://twitter.com/intent/tweet?${generateQueryParams({
        text: body,
      })}`
  }
}
