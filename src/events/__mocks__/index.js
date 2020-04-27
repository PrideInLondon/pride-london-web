export const mockNodes = [
  //nodeOne
  {
    node: {
      id: '123',
      date: {
        dates: [
          {
            startDate: '2035-06-02T13:30:00.000Z',
            endDate: '2035-06-02T00:14:30.000Z',
          },
        ],
      },
      eventsListPicture: {
        file: {
          url: '123123',
        },
      },
    },
  },
  //nodeTwo
  {
    node: {
      id: '234',
      date: {
        dates: [
          {
            startDate: '2035-06-03T13:30:00.000Z',
            endDate: '2035-06-03T00:14:30.000Z',
          },
        ],
      },
      eventsListPicture: {
        file: {
          url: '123123',
        },
      },
    },
  },

  //nodeThree
  {
    node: {
      id: '1234',
      date: {
        dates: [
          {
            startDate: '2035-06-03T13:30:00.000Z',
            endDate: '2035-06-03T00:14:30.000Z',
          },
        ],
      },
      eventsListPicture: {
        file: {
          url: '123123',
        },
      },
    },
  },
]

export const testEvent = {
  node: {
    accessibilityOptions: [
      "My venue doesn't cater for any of these accessibility needs",
    ],
    audience: ['18+'],
    date: {
      dates: [
        {
          startDate: '2035-06-02T13:30:00.000Z',
          endDate: '2035-06-02T00:14:30.000Z',
        },
      ],
    },
    eventCategories: ['Talks and Debates'],
    eventPriceLow: 0,
    eventsListPicture: {
      fixed: {
        base64: '',
        height: 235,
        src: '',
        srcSet: '',
        srcSetWebp: '',
        srcWebp: '',
        width: 400,
      },
    },
    id: '123',
    name: 'Diversity by Default',
    postcode: 'TEST',
    recurrenceDates: null,
    startTime: '2035-06-02T13:30+01:00',
  },
}
