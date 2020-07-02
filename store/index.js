import Vuex from 'vuex'

const ticketCustomer = () => {
  return new Vuex.Store({
    state: () => ({
      tickets: [],
      currentTicket: null,
      idTicket: 500
    }),
    mutations: {
      VIEW_TICKET(state, value) {
        state.currentTicket = value
      },
      ADD_TICKET(state, value) {
        state.tickets.push({
          ...value,
          ...{
            id: state.idTicket
          }
        })
        state.idTicket++
      },
      DELETE_TICKET(state, value) {
        let index = state.tickets.findIndex(t => t.idTicket === value.idTicket)
        state.tickets.splice(index, 1)
      }
    },
    getters: {
      tickets: (state) => state.tickets,
      currentTicket: (state) => state.currentTicket
    }
  })
}

export default ticketCustomer