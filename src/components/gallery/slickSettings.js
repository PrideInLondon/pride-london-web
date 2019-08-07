import theme from '../../theme/theme'

export const settings = {
  speed: 450,
  centerPadding: '15%',
  centerMode: true,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  slidesToShow: 1,
  className: 'gallery-slick',
  responsive: [
    {
      breakpoint: theme.breakpoints[1] - 1,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '100px',
        arrows: false,
      },
    },
    {
      breakpoint: 550,
      settings: {
        arrows: false,
        slidesToScroll: 1,
        centerPadding: '40px',
        slidesToShow: 1,
        centerMode: true,
      },
    },
  ],
}
