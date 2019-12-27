import { md, lg, xl } from '../../../../theme/breakpoints'

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
      breakpoint: xl - 1,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '100px',
      },
    },
    {
      breakpoint: lg - 1,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '50px',
      },
    },
    {
      breakpoint: md - 1,
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
