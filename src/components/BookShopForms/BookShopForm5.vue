<template>
    <section>
        <h1 class="MainText">Lyceum Book and Stationery Store</h1>
         <div class="container-fluid invoiceimg">
        <img src="../../assets/BookShopImages/ruler.svg" alt="..." class="img-fluid">
      </div>
        <div class="invoicediv d-flex">
            <div>
        <p class="invoice smalltext">Invoice to: <span style="color:#FF0000;">Buland Khan</span></p>
    </div>
    <div class="invoiceinside smalltext">
        <p>Order Id: <span style="color:#FF0000;">Ly02153</span></p>
        <p>Date: <span style="color:#FF0000;">12/12/2022 </span></p>
    </div>
    </div>
    <table class="table table-striped">
  <thead class="tablehead">
    <tr>
      <th scope="col">Sr.</th>
      <th scope="col">Book Name</th>
      <th scope="col">Author Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Physics</td>
      <td>Buland Khan</td>
      <td>Rs.290</td>
      <td>1</td>
      <td>Rs.290</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Physics</td>
      <td>Buland Khan</td>
      <td>Rs.290</td>
      <td>1</td>
      <td>Rs.290</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Physics</td>
      <td>Buland Khan</td>
      <td>Rs.290</td>
      <td>1</td>
      <td>Rs.290</td>
    </tr>
  </tbody>
</table>
<div class="deliverycharges smalltext">
        <p>Delivery Charges: <span style="color:#111111;">Rs.500</span></p>
        <p>Date: <span style="color:#FF0000;">12/12/2022 </span></p>
    </div>
    
     <div class="invoicetotal">
        <p>Total Amount Rs.1370</p>
     </div>
     <div class="saveinvoice">
        <p>Save Invoice</p>
     </div>
     
        
    
</section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.smalltext{

font-weight: 600;
font-size: 18px;
line-height: 34.68px;
}
.invoiceimg{
  margin-bottom: 3vw;
}
.tablehead{
background-color: #00264A;
color: white;
}
.table{
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
.MainText{
    
    font-style: SemiBold;
    font-size: 34px;
    line-height: 72px;
    vertical-align: Top;
    color: #00264A;
    font-weight: 600;
}
.invoice{
    transform: translateX(20vw);
}
.invoiceinside{
    transform: translateX(59vw);
}

.deliverycharges{
    transform: translateX(23vw);
}
.invoicetotal{
    border: solid;
    width: 15vw;
    transform: translateX(64vw);
    background-color: #00264A;
    color: white;
    padding: 1vw;
}
.saveinvoice{
    border: solid;
    width: 8vw;
    transform: translateX(68vw);
    background-color: #00264A;
    color: white;
   
}

/* Media Quireies Start */
@media screen and (max-width: 1455px) {
.invoiceinside{
  transform: translateX(54vw);
}
}

@media screen and (max-width: 1200px) {
.invoicetotal{
  width: 21vw;
    transform: translateX(58vw);
}
.saveinvoice{
  width: 14vw;
    transform: translateX(62vw);
}
}


@media screen and (max-width: 992px) {
    .invoiceinside
    {
        transform: translateX(42vw);
    }
    .deliverycharges{
        transform: translateX(18vw);
    }
}
@media screen and (max-width: 900px) {
  .invoiceinside
    {
        transform: translateX(42vw);
    }

}
@media screen and (max-width: 768px){
     .table{
        width: 80%;
     }
     .invoiceinside
    {
        transform: translateX(42vw);
    }
    .invoicetotal{
      width: 25vw;
      transform: translateX(63vw);
    }
    .saveinvoice{
      width: 17vw;
      transform: translateX(68vw);
    }
    .invoice{
      transform: translateX(11vw);
    }
    .MainText{
      font-size: 28px;
    }
    .deliverycharges{
      transform: translateX(24vw);
    }

}
@media screen and (max-width: 720px){
  .invoiceinside
    {
        transform: translateX(31vw);
    }
}
@media screen and (max-width: 575px){
.invoicediv{
  flex-direction: column;
}
.invoiceinside{
  transform: translateX(5vw);
}
.invoice{
  transform: translateX(3vw);
}
.invoicetotal{
  width: 37vw;
    transform: translateX(53vw);
}

.saveinvoice{
  
  width: 23vw;
  transform: translateX(62vw);

}
}
</style>