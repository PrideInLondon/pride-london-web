import theme from '../../../../theme/theme'

export const settings = {
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  centerMode: true,
  centerPadding: '100px',
  responsive: [
    {
      breakpoint: theme.breakpoints[3] - 1,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '100px',
      },
    },
    {
      breakpoint: theme.breakpoints[2] - 1,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '50px',
      },
    },
    {
      breakpoint: theme.breakpoints[1] - 1,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '50px',
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '20px',
      },
    },
  ],
}
