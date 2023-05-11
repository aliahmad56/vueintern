<template>
  <section>
      <h1 class="MainText">Lyceum Book and Stationery Store</h1>
  
      <div class="card">
    <div class="card-body">
      <h4 class="card-title">Thank You !</h4>
      <p class="card-text">Your order has been placed. It will be delivered to you in 2 working days.</p>
    </div>
    <div class="footer">
    <p>Order Id : <span style="color: #FF0000;">Ly02153  </span></p>
    <p>Help Line : +92 314 424 4289</p>
  </div>
  </div>
  </section>
  </template>
  
  <script>
  export default {
  
  }
  
  </script>
  <style scoped>
  
  
  .MainText{
      
      font-size: 34px;
      vertical-align: Top;
      color: #00264A;
      font-weight: 600;
      line-height: 58px;
  }
  .card{
      margin: auto;
      box-shadow: 0px 1px 8px 3px #909090;
      width: 29%;
  }
  .card-title{
      font-family: 'jost';
  font-weight: 600;
  font-size: 35px;
  padding-top:20px;
  color: #00264A;
  }
  .card-text{
  font-weight: 600;
  font-size:15px;
  line-height:43.35px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  text-align:Center;
  color: #00264A;
  
  }
  .footer{
    text-align: left;
    padding-left: 20px;
    font-family: 'Jost';
  font-weight: 600;
  font-size:16px;
  line-height:15px;
  color: #00264A;
  padding-top: 20px;
  }
  /* Media Quiries Start */
  
  @media (max-width: 1880px) and (min-width: 1500px)
  {
    .card-text{
      font-size: 22px;
    }
    .footer{
      padding-bottom: 24px;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 992px)
  {
  .card{
    width: 45%;
  }
  }
  @media screen and (max-width: 768px)
  {
    .card{
    width: 55%;
  }
  .MainText{
    font-size: 27px;
  
  }
  }
  @media screen and (max-width: 575px)
  {
    .card{
    width: 70%;
    margin-bottom: 10px;
  }
  .MainText{
    font-size: 21px;
  }
  .card-title{
    padding-top: 10px;
  }
  .card-text{
    
    padding-top: 10px;
  }
  .footer{
    padding-top: 10px;
  }
  }
  @media screen and (max-width: 400px)
  {
    .card-text{
      font-weight: 600;
      font-size: 13px;
      line-height: 37.35px;
      padding-left: 30px;
      padding-right: 30px;
    }
    .footer{
      font-size: 14px;
      line-height: 12px;
    }
    .card-title{
      font-size: 30px;
    }
    .MainText{
      line-height: 30px;
    }
  }
  </style>