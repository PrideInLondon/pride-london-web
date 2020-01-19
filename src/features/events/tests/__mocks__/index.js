export const mockEvents = [
  {
    data: {
      locationName: 'Test',
      eventPriceLow: 20,
      phone: 'foo',
      email: 'foo@foo.com',
      ticketingUrl: 'https://foo.com',
      accessibilityOptions: ['Test1', 'Test2'],
      venueDetails: ['Indoors', 'Gender neutral toilets'],
    },
    pageContext: {
      id: 'test-1',
      startTime: '2006-06-02T13:30+00:00',
      endTime: '2006-06-03T13:30+00:00',
    },
  },
  {
    data: {
      locationName: 'Test 2 - Two days',
      eventPriceLow: 10,
    },
    pageContext: {
      id: 'test-2',
      startTime: '2006-06-02T13:30+00:00',
      endTime: '2006-06-02T13:30+00:00',
    },
  },
]

export const mockNodes = [
  //nodeOne
  {
    node: {
      id: '123',
      startTime: '2035-06-02T13:30+01:00',
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
      startTime: '2006-06-02T13:30+01:00',
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
      startTime: '2035-06-02T13:30+01:00',
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
    endTime: '2035-06-07T20:30+01:00',
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
