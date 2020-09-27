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
      },
      {
        variantId:2444,
        variantColor:'red',
      },
      {
        variantId:2444,
        variantColor:'yellow',
      },
    ]
  }
})