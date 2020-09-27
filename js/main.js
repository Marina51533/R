const app= new Vue({
  el: '#app',
  data:{
   
      product: 'Cars',
      describtion: ' The most popular cars',
      image: './img/green.jpg',
      anchor: 'https://www.youtube.com/watch?v=b6Ac0jcqJIg&t=446s',
      inStock:false,
      details:['robot','cooper','disel'],
      
    variants:[
      {
        variantId:2345,
        variantColor:'blue',
        variantImage:'./img/blue.png'
      },
      {
        variantId:2444,
        variantColor:'red',
        variantImage:'./img/red_car.jpg'
      },
      {
        variantId:4454,
        variantColor:'yellow',
        variantImage:"./img/yellow.jpg"
      },
      {
        variantId:2554,
        variantColor:'green',
        variantImage:"./img/green.jpg"
      },
    ],
    cart:0,
  },
  methods:{
    addToCart: function (){
      this.cart+=1
    },
    updateProduct: function (variantImage){
      this.image= variantImage
    }
  }
})