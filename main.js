var app = new Vue({
  el: '#root',
  data: {
    email: ''
  },
  methods: {
    emailRandom: function(){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((response) => {
        this.email = response.data.response
      });

    },
  }
})
