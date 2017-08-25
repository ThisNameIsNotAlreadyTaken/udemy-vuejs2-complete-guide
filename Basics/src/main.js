import Vue from 'vue';

var exercise1 = new Vue({
  el: '#exercise1',
  data: {
    name: 'Vasya',
    age: 27,
    imageSrc: 'https://i.ytimg.com/vi/DsuTwV0jwaY/maxresdefault.jpg'
  }
});

var exercise2 = new Vue({
  el: '#exercise2',
  data: {
      value: ''
  },
  methods: {
    showAlert(){ 
      alert('Alert');
    },
    onKeyDown(event) { 
      this.value = event.target.value;
    }
  }
});

var exercise3 = new Vue({
  el: '#exercise3',
  data: {
      value: 0
  },
  computed: {
    result() {
      return this.value < 37 ? 'not there yet' : 'done';
    }
  },
  watch: {
    result: function() {
      let self = this;
      setTimeout(() => {
        self.value = 0;
      }, 5000);
    }
  }
});

var exercise4 = new Vue({
  el: '#exercise4',
  data: {
    effectClasses: '',
    float: 'float',
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
        let self = this;
        setInterval(() => {
          self.effectClasses = self.effectClasses === 'highlight' ? 'shrink' : 'highlight';
        }, 1000);
    },
    startProgress: function() {
      var self = this;
      var width = 0;
       
      setInterval(() => {
        width = width + 10;
        self.progressBar.width = width + 'px';
      }, 500);
    }
  }
});

var exercise5 = new Vue({
  el: '#exercise5',
  data: {
    show: true,
    array: ['Max', 'Anna', 'Chris', 'Manu'],
    myObject: {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkiens',
      books: '3'
    },
    testData: {
      name: 'TESTOBJECT', 
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21]
    }
  }
});