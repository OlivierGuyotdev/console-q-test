<template>
  <div>
    <img src="https://res.cloudinary.com/djdkufwrh/image/upload/v1593545854/Qnomy/test.jpg" alt="Reception Console" class="img-fluid new-customer">
    <div class="box-newcustomer">
      <div class="d-flex justify-content-between dateday">
        <h6 class="font-weight-bold">Welcome</h6>
        <p class="font-weight-bold">{{ dateDay | moment("ddd, hA") }}</p>
      </div>
      <div>
        <h3 class="font-weight-bold">New Customer
        </h3>
        <p>Please add the name of the customer</p>
      </div>
      <div>
        <b-form @submit.stop.prevent="onSubmit">
          <b-form-group id="input-customer2"  label-for="input-customer2">
            <b-row align-h="center">
              <b-col sm="9">
                <b-form-input
                  id="input-customer"
                  name="input-customer"
                  v-model="$v.form.name.$model"
                  :state="validateState('name')"
                  aria-describedby="input-customer-feedback"
                  placeholder="Enter name"
                  autocomplete="off"
                ></b-form-input>
                <b-form-invalid-feedback
                  id="input-customer-feedback"
                >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
              </b-col>
            </b-row>
          </b-form-group>
            <div v-if="form.name != null && form.name.length >=3" >
              <b-button  type="submit" @click="addTicket"  variant="primary">Add customer</b-button>
              <b-button class="ml-2" @click="resetForm()">Reset</b-button>
            </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: null
      },
      dateDay: new Date(),

    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),

      }
    }
  },
  methods: {
    addTicket () {
      this.$store.commit('ADD_TICKET', {name: this.form.name, dateCreate: new Date()})
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;

    },
    resetForm() {
      this.form = {
        name: null
      };

      `this.$nextTick(() => {
        this.$v.$reset();
      });`
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.form.name = "";
      this.$v.form.$reset()
    }
  }
};
</script>
