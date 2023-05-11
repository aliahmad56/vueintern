<template>
 <section>
    <h1 class="MainText" >Lyceum Book and Stationery Store</h1>
    <router-link to="/form4">
    <button type="button" class="btn">Check Out</button>
    </router-link>
     <div class="maindiv container">
      
        <div class="row">
          
      <div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xxl-4 col-8 customm">
<div class="card mb-3">
  <div class="row g-0" style="padding: 10px;">
    <div class="col-md-4">
      <img src="../../assets/BookShopImages/physics.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Chemistry</h5>
        <p class="card-text">We are Lyceum Group Lorem ipsum dolor sit amet, consectetur adipiscing elit, .   sed do eiusmod incididunt ut.</p>
        
      </div>
      <img src="../../assets/BookShopImages/star.png" alt="..." class="img-fluid starimage">
    </div>
  </div>
</div>
</div>    
   
<!-- ************* -->
<div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xxl-4 col-8 customm">
<div class="card mb-3">
  <div class="row g-0" style="padding: 10px;">
    <div class="col-md-4">
      <img src="../../assets/BookShopImages/chemistry.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Chemistry</h5>
        <p class="card-text">We are Lyceum Group Lorem ipsum dolor sit amet, consectetur adipiscing elit, .   sed do eiusmod incididunt ut.</p>
        
      </div>
      <img src="../../assets/BookShopImages/star.png" alt="..." class="img-fluid starimage">
    </div>
  </div>
</div>
</div>
<!-- ************* -->
<div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xxl-4 col-8 customm">
<div class="card mb-3">
  <div class="row g-0" style="padding: 10px;">
    <div class="col-md-4">
      <img src="../../assets/BookShopImages/Biology.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Biology</h5>
        <p class="card-text">We are Lyceum Group Lorem ipsum dolor sit amet, consectetur adipiscing elit, .   sed do eiusmod incididunt ut.</p>
        
      </div>
      <img src="../../assets/BookShopImages/star.png" alt="..." class="img-fluid starimage">
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

@media screen and (max-width: 992px) {
.btn{
  transform: translateX(29vw);
}
}

@media screen and (max-width: 768px) {
.btn{
  transform: translateX(26vw);
}
}
@media screen and (max-width: 575px) {
.MainText{
  font-size: 25px;
}
.customm{
      margin: auto;
}
.btn{
  
    transform: translateX(21vw);

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