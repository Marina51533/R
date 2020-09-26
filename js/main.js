var app = new Vue({
  el: '#app',
  data: {
    product: 'New Car',
    image:'./img/bmw.jpg',
    inStock:10,
    details:['red','auto','BMW'],
    variants:[
    {
variantId:2233,
variantColor:'red',
variantImage:'./img/bmw.jpg',
    },
    {
      variantId:28933,
     variantColor:'blue',
     variantImage:'./img/car_red.jpg',
    }
    ],
    cart:0,
  },

  methods:{
    addToCart: function (){
      this.cart +=1
    },
    updateProduct(variantImage){
      this.image=variantImage
    }
  }
})