<template>
    <section>
        <h1 class="MainText">Lyceum Book and Stationery Store</h1>
        <div class="maindiv">
            <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-10">
        <div class="card">
       <img src="../../assets/BookShopImages/OrderBook.png" class="card-img-top" alt="...">
       <div class="card-body">
       <p class="card-text">Order Books</p>
       </div>
       </div>
    </div>
       <!-- This Is second Card -->
       <div class="col-lg-6 col-md-6 col-sm-10">
       <div class="card">
       <img src="../../assets/BookShopImages/OrderStatiory.png" class="card-img-top" alt="...">
       <div class="card-body">
        <router-link to="/form3">
       <p class="card-text">Order Stationery</p>
       </router-link>
       </div>
       </div>
    </div>
    </div>
    </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.maindiv{
    display: flex;
    margin-top: 40px;
    justify-content: space-evenly;
}
.MainText{
    
    font-style: SemiBold;
    font-size: 34px;
    line-height: 72px;
    vertical-align: Top;
    color: #00264A;
    font-weight: 600;
}
.card{

    border: none;
   
}
.card img{
    border-radius: 15px 15px 0px 0px;
}
.card-body{
    background-color: #00264A;
    color: white;
    border-radius: 0px 0px 15px 15px;
}

.card-text {
    font-family: Jost;
font-style: SemiBold;
font-size: 36px;
line-height: 52px;
text-align: center;
vertical-align: Top;
}

@media screen and (max-width: 992px) {
.card{
    width: 19rem;
}
}

@media screen and (max-width: 768px) {
    .card{
    margin-bottom: 4vw !important;
    width: 19rem;
    margin: auto;
}
.MainText{
    font-size: 28px;
}
}

@media screen and (max-width: 680px) {
    .MainText{
        font-size: 27px;
        line-height: 47px;
    }
}
</style>