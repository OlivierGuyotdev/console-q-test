<template>
  <div class="container">
    <b-container>
      <b-row>
        <b-col lg="5" sm="12" class="respmarge">
          <ReceptionConsole/>
        </b-col>
        <b-col lg="7" sm="12" class="bg-service-console respmarge">
          <ServiceConsole/>
        </b-col>
      </b-row>
  </b-container>
  </div>
</template>

<script>
import ReceptionConsole from "~/components/ReceptionConsole.vue";
import ServiceConsole from "~/components/ServiceConsole.vue";
export default {
components: {
    ReceptionConsole, ServiceConsole,
  },
}
</script>

<style lang="sass">
  $maincolor: #fff;
  $paramsnewcustomer: 2px 0px 5px 0px rgba(0,0,0,0.75);
  $boxnewcustomer : #dedede;
  $borderraduis: 5px;
  $waitinglistbgcolor:  #007bff;
  $waitinglisttextcolor:  #fff;
  $bg-service-console: #f8f8f8 url(https://res.cloudinary.com/djdkufwrh/image/upload/v1593667954/Qnomy/bg.jpg);

  $breakpoint-tablet: 768px;

  body
    background : $maincolor;
    background-image: url(https://res.cloudinary.com/djdkufwrh/image/upload/v1593643910/Qnomy/LEST660-2B-Help-small-business-1920x1080-v1_1.jpg);
    background-repeat: no-repeat;
    background-size: cover;

  .container
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;


  .box-newcustomer
    background: $boxnewcustomer;
    padding: 15px;
    -webkit-box-shadow: $paramsnewcustomer;
    -moz-box-shadow: $paramsnewcustomer;
    box-shadow: $paramsnewcustomer;
    height: 325px;

  .new-customer
    border-radius: $borderraduis;
    -webkit-box-shadow: $paramsnewcustomer;
    -moz-box-shadow: $paramsnewcustomer;
    box-shadow: $paramsnewcustomer;

  .dateday
    padding-top: 10px;

  .waiting-list
    overflow-x: hidden;
    overflow-y: scroll;
    height: 395px;

  .waiting-list-title
    border-bottom: 1px solid #dedede;


  .waiting-list-ticket
    background: $waitinglistbgcolor;
    border-radius: $borderraduis;
    -webkit-box-shadow: $paramsnewcustomer;
    -moz-box-shadow: $paramsnewcustomer;
    box-shadow: $paramsnewcustomer;
    color: $waitinglisttextcolor;
    padding: 15px;
    margin: 10px 0 0 0;

    p
      padding-top: 10px

      span
        font-size: 20px;

  .tickets
    padding: 10px 0;

  .ticket-roomagent
    font-size: 15px

  .bg-service-console
    background: $bg-service-console;
    padding: 25px;
    opacity: 0.85;

  .respmarge
    margin-top : 15px;




  .modal-header
    display: none;

  .modal-body
    background-color: $waitinglistbgcolor;
    color: #fff;
    font-size: 2.1rem;


  .buttons
      a
        margin-right: 30px
        margin-bottom: 25px;
        width: 45px
        height: 45px
        display: inline-block
        position: relative
        line-height: 64px
        background-color: #eaeaea
        background-image: -webkit-gradient(linear, left top, left bottom, from(#f6f6f6), to(#eaeaea))
        background-image: -webkit-linear-gradient(top, #f6f6f6, #eaeaea)
        background-image: -moz-linear-gradient(top, #f6f6f6, #eaeaea)
        background-image: -ms-linear-gradient(top, #f6f6f6, #eaeaea)
        background-image: -o-linear-gradient(top, #f6f6f6, #eaeaea)
        background-image: linear-gradient(top, #f6f6f6, #eaeaea)
        -moz-border-radius: 32px
        -webkit-border-radius: 32px
        border-radius: 32px
        -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 3px rgba(0, 0, 0, 0.1)
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 3px rgba(0, 0, 0, 0.1)
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 3px rgba(0, 0, 0, 0.1)

        &:active
          top: 1px
          background-image: -webkit-gradient(linear, left top, left bottom, from(#eaeaea), to(#f6f6f6))
          background-image: -webkit-linear-gradient(top, #eaeaea, #f6f6f6)
          background-image: -moz-linear-gradient(top, #eaeaea, #f6f6f6)
          background-image: -ms-linear-gradient(top, #eaeaea, #f6f6f6)
          background-image: -o-linear-gradient(top, #eaeaea, #f6f6f6)
          background-image: linear-gradient(top, #eaeaea, #f6f6f6)

        &::before
          content: ''
          position: absolute
          z-index: -1
          top: -8px
          right: -8px
          bottom: -8px
          left: -8px
          background-color: #eaeaea
          -moz-border-radius: 140px
          -webkit-border-radius: 140px
          border-radius: 140px
          opacity: 0.5

        &:active::before
          top: -9px

        &:hover::before
          opacity: 1

        &.call:hover::before
          background-color: #88ecff
        &.delete:hover::before
          background-color: #fb8585

  .call img
    vertical-align: 0
  .delete img
    vertical-align: 0

  .buttons a img
    border: 0









</style>
