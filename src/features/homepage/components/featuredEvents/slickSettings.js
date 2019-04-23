import theme from '../../../../theme/theme'

export const settings = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: theme.breakpoints[1] - 1,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
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
}
