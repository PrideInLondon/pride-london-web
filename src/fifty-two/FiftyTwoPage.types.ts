// TODO: remove this following merge from gallery branch
export interface Category {
  title: string
  hexColour: string
}

export interface FiftyTwoPageProps {
  data: {
    contentfulCustomPageContent: {
      title: string
      subtitle: string
    }
  }
}
