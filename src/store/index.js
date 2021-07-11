import { createStore } from 'vuex'

export default createStore({
  state: {
    companies: [
      'Acme AI',
      'Prosperity Brokerage',
      'Bitcoin Mine Co'
    ],
    contacts: [
      'Jim Stewart',
      'Janet Jones',
      'Blake Summers'
    ],
    activities: [
      {
        date: new Date(2020, 1, 10),
        activityType: 'Phone Call',
        contact: 'Jim Stewart',
        company: 'Acme AI',
        job: 'Software Engineer',
        notes: 'Will send coding assigment'
      },
      {
        date: new Date(2020, 1, 11),
        activityType: 'Networking Event',
        contact: 'Janet Jones',
        company: 'Prosperity Brokerage',
        job: 'Software Engineer',
        notes: 'Looking to hire 3-4 remote software engineers'
      },
      {
        date: new Date(2020, 1, 12),
        activityType: 'Interview',
        contact: 'Blake Summers',
        company: 'Bitcoin Mine Co',
        job: 'Software Engineer',
        notes: 'Will make decision for second-round interviews by end of next week'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
