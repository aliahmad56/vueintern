<template>
  <section>
     <h1 class="MainText" >Lyceum Book and Stationery Store</h1>
     
     <h2 class="MainText">Order Bag</h2>
     <router-link to="/form4">
     <button type="button" class="btn">Check Out</button>
     </router-link>
      <div class="maindiv container">
         <div class="row">
           
       <div class="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-xxl-4 col-8 customm">
 <div class="card mb-3">
   <div class="row g-0" style="padding: 10px;">
     <div class="col-md-4 xl-6">
       <img src="../../assets/BagsImages/Bag1.png" class="img-fluid rounded-start" alt="...">
     </div>
     <div class="col-md-8 xl-6">
       <div class="card-body">
         <h5 class="card-title">Red Riding Bag</h5>
         <p class="card-text">We are Lyceum Group Lorem ipsum dolor sit amet, consectetur adipiscing elit, .   sed do eiusmod incididunt ut.</p>
         
       </div>
       <img src="../../assets/BookShopImages/star.png" alt="..." class="img-fluid starimage">
       <div class="footer d-flex">
        <div>
        <img src="../../assets/BookShopImages/discount.svg" alt="..." class="img-fluid footer-inner">
      </div>
      <div>
        <p class="price">Rs. 1999/-</p>
      </div>
      
     </div>
     <button type="button" class="btn-primary cart">Add To Cart</button>
     </div>
   </div>
   
 </div>
 </div>    
    
 <!-- ************* -->
 <div class="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-xxl-4 col-8 customm">
 <div class="card mb-3">
   <div class="row g-0" style="padding: 10px;">
     <div class="col-md-4 xl-6">
       <img src="../../assets/BagsImages/Bag1.png" class="img-fluid rounded-start" alt="...">
     </div>
     <div class="col-md-8 xl-6">
       <div class="card-body">
         <h5 class="card-title">Red Riding Bag</h5>
         <p class="card-text">We are Lyceum Group Lorem ipsum dolor sit amet, consectetur adipiscing elit, .   sed do eiusmod incididunt ut.</p>
         
       </div>
       <img src="../../assets/BookShopImages/star.png" alt="..." class="img-fluid starimage">
       <div class="footer d-flex">
        <div>
        <img src="../../assets/BookShopImages/discount.svg" alt="..." class="img-fluid footer-inner">
      </div>
      <div>
        <p class="price">Rs. 1999/-</p>
      </div>
      
     </div>
     <button type="button" class="btn-primary cart">Add To Cart</button>
     </div>
   </div>
   
 </div>
 </div> 
 <!-- ************* -->
 <div class="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-xxl-4 col-8 customm">
 <div class="card mb-3">
   <div class="row g-0" style="padding: 10px;">
     <div class="col-md-4 xl-6">
       <img src="../../assets/BagsImages/Bag1.png" class="img-fluid rounded-start" alt="...">
     </div>
     <div class="col-md-8 xl-6">
       <div class="card-body">
         <h5 class="card-title">Red Riding Bag</h5>
         <p class="card-text">We are Lyceum Group Lorem ipsum dolor sit amet, consectetur adipiscing elit, .   sed do eiusmod incididunt ut.</p>
         
       </div>
       <img src="../../assets/BookShopImages/star.png" alt="..." class="img-fluid starimage">
       <div class="footer d-flex">
        <div>
        <img src="../../assets/BookShopImages/discount.svg" alt="..." class="img-fluid footer-inner">
      </div>
      <div>
        <p class="price">Rs. 1999/-</p>
      </div>
      
     </div>
     <button type="button" class="btn-primary cart">Add To Cart</button>
     </div>
   </div>
   
 </div>
 </div> 
 </div>
 </div>
 <h4 class="bottomtext">Order full syllabus? Click Here</h4>
  </section>
 </template>
 
 <script>
 export default {
     
 }
 </script>
 
 <style scoped>
 .maindiv{
     display: flex;
  }
 
  .card{
   box-shadow: 4px 4px 4px 4px #909090;
  }
  .btn{
   background-color: #00264A;
   color: white;
   transform: translateX(41vw);
     margin-bottom: 1vw;
 
  }
 .card-title{
     
 font-weight: 600;
 font-size: 24px;
 line-height: 34.68px;
 text-align: left;
 }
 .card-text{
     font-family: Inter;
 font-weight: 400;
 font-size: 16px;
 text-align: Justify;
 }
 .starimage{
     margin-right: 9vw!important;
 }
 .MainText{
     
     font-style: SemiBold;
     font-size: 34px;
     line-height: 72px;
     vertical-align: Top;
     color: #00264A;
     font-weight: 600;
 }
 .bottomtext{
 font-weight: 600;
 font-size:24px;
 line-height: 34.68px;
 }
.footer-inner{
  width: 8vw;
}

.price{
  font-size: 23px;
    margin-top: -5px;
    font-weight: bold;

}
.cart{
  width: 16vw;
    padding: 10px;
    border-radius: 20vw;
    border: none;
    background: linear-gradient(90deg, rgba(17,120,189,1) 0%, rgba(57,179,209,1) 53%)

}
 
 @media (max-width: 1880px) and (min-width: 1500px) {
   .btn{
     transform: translateX(32vw);
   }
 }
 
 @media (max-width:1200px) and (min-width: 992px)
 {
   .starimage{
     margin-right: 5vw!important;
   }
 
 }

 @media screen and (max-width: 1480px) {
 .price{
  margin-left: 16px;
 }
 }
 @media screen and (max-width: 992px) {
 .btn{
   transform: translateX(29vw);
 }
 .price{
    font-size: 21px;
    margin-left: 2px;
   }
   .footer-inner{
    width: 12vw;
   }
 }
 
 @media screen and (max-width: 768px) {
 .btn{
   transform: translateX(26vw);
 }
 .cart{
  width: 25vw;
 }
 }
 @media screen and (max-width: 575px) {
 .MainText{
   font-size: 25px;
 }
 .cart{
  width: 36vw;
 }
 .customm{
       margin: auto;
 }
 .btn{
   
     transform: translateX(21vw);
 
 }
 .footer{
  margin-left: 10vw;
    margin-top: 3vw;
 }
 }
 @media screen and (max-width: 430px) {
 .btn{
   transform: translateX(0vw);
     margin-bottom: 18px;
 }
 .MainText{
       line-height: 44px;
 }
 }
 
 </style>