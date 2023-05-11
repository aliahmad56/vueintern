<template>
    <section>
        <h1 class="MainText">Lyceum Book and Stationery Store</h1>
      <table class="table border=1 frame=hsides rules=rows">
  <thead class="tablehead">
    <tr class="seperate">
      <th scope="col">Sr.</th>
      <th scope="col">Book Name</th>
      <th scope="col">Author Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col" class="insideborder">Total Price</th>
    </tr>
  </thead>
  <tbody>
    <tr class="seperate">
      <td scope="row">1</td>
      <td>Physics</td>
      <td>Buland Khan</td>
      <td>Rs.290</td>
      <td>1</td>
      <td class="insideborder">Rs.290</td>
    </tr>
    <tr class="seperate">
      <td scope="row">1</td>
      <td>Physics</td>
      <td>Buland Khan</td>
      <td>Rs.290</td>
      <td>1</td>
      <td class="insideborder">Rs.290</td>
    </tr>
    <tr class="seperate">
      <td scope="row">1</td>
      <td>Physics</td>
      <td>Buland Khan</td>
      <td>Rs.290</td>
      <td>1</td>
      <td class="insideborder">Rs.290</td>
    </tr>
  </tbody>
</table>

</section>
</template>

<script>
export default {

}
</script>

<style scoped>
.table{
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  border-spacing:0px 20px;
  border-collapse: separate;
   
}
.insideborder{
  border: 1px solid black;
}

th, td {
  border: 1px solid black;
  border-right: hidden;
}

.MainText{
    
    font-style: SemiBold;
    font-size: 34px;
    line-height: 72px;
    vertical-align: Top;
    color: #00264A;
    font-weight: 600;
}
</style>