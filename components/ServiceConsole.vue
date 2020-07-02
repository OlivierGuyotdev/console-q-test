<template>
  <div>
    <b-modal v-if=" currentTicket!= null" id="modal-ticket" centered  title="Current Customer" static no-auto-hide>
      <p>Ticket № {{ currentTicket.id }} <br> {{ currentTicket.name }} </p>
      <p class="ticket-roomagent">Room: 125 | Agent : Ohad</p>
    </b-modal>
    <div class="waiting-list-title"><h3>Waiting list service</h3>
    <p>Please wait until an agent call you, thanks</p></div>
    <div class="waiting-list">
      <hr>
      <div v-for="(item in tickets" class="tickets">
        <b-row align-h="center">
          <b-col sm="4">
            <div class="waiting-list-ticket">
              <p>Ticket <br><span>№ {{ item.id }}</span></p>
            </div>
          </b-col>
          <b-col sm="4">
            <p>Customer arrival:<br><span class="font-weight-bold ">{{ item.dateCreate |moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</span></p>
            <p> Customer: {{ item.name }} </p>
          </b-col>
          <b-col sm="4">
          <div class="buttons">
            <a @click="removeItem(item)" class="delete"><img src="https://res.cloudinary.com/djdkufwrh/image/upload/v1593670438/Qnomy/delete.png" /></a>
            <a @click="view(item)" class="call"><img src="https://res.cloudinary.com/djdkufwrh/image/upload/v1593669624/Qnomy/call.png" /></a>

          </div>
          </b-col>
        </b-row>
        <hr>
      </div>


    </div>


  </div>
</template>
<script>
import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
          dateCreateTicket: new Date(),
      }
    },
    computed: {
    ...mapGetters({
     tickets: 'tickets',
     currentTicket: 'currentTicket'
   }),
    },
    methods: {
      view(item){
        this.$store.commit('VIEW_TICKET', item),
        this.$bvModal.show('modal-ticket')
      },
      removeItem(item){
        this.$store.commit('DELETE_TICKET', item)
      }
  }
  }
</script>
