var app = new Vue({
  el: '#app',
  data: {
    brand: 'Lous Vettone',
    product: 'New Car',
    selectedVariant:0,
    details:['red','auto','BMW'],
    variants:[
    {
variantId:2233,
variantColor:'red',
variantImage:'./img/bmw.jpg',
variantQuantity:10
    },
    {
      variantId:28933,
     variantColor:'blue',
     variantImage:'./img/car_red.jpg',
     variantQuantity:0
    }
    ],
    cart:0,
  },
   
computed:{
  title(){
    return this.brand + ' '+this.product
  },
  image() {
    return this.variants[this.selectedVariant].variantImage
  },
  inStock() {
return this.variants[this.selectedVariant].variantQuantity
  }
},

  methods:{
    addToCart: function (){
      this.cart +=1
    },
    updateProduct(index){
      this.selectedVariant=index
   
    }
  }
})