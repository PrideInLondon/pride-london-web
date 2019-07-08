import theme from '../../../../theme/theme'

export const settings = slides => ({
  speed: 500,
  slidesToShow: slides >= 3 ? 3 : slides,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: slides >= 2 ? 2 : slides,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: theme.breakpoints[1] - 1,
      settings: {
        slidesToShow: slides >= 2 ? 2 : slides,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
      },
    },
  ],
})
