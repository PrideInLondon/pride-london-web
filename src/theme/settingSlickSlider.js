import theme from './theme'

export const settings = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  arrows: true,
  responsive: [
    {
      breakpoint: theme.breakpoints[2],
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: theme.breakpoints[1],
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
