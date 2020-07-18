export interface FiftyTwoPageProps {
  data: {
    contentfulCustomPageContent: {
      title: string
      subtitle: string
      cta: {
        ctaTitle: string
        bodyText: string
        buttonUrl: string
        buttonText: string
      }
    }
  }
}
