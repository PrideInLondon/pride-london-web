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
