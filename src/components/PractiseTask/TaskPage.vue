<!-- Using Composition Api store data in an object and display-->
<template>
    <section>
      <h1 class="MainText">Lyceum Book and Stationery Store</h1>
  
      <div class="card">
        <ul class="list-group list-group-flush" v-for="value in obj1" :key="value.id">
          <li class="list-group-item">
            <lable class="labeltext">Country</lable>
            <br />
            <input class="input" type="text" placeholder="{{ value.Branch }}" />
          </li>
          <li class="list-group-item">
            <lable class="labeltext">Branch</lable>
            <br />
            <input class="input" type="text" placeholder="{{ value.Branch }}" />
          </li>
          <li class="list-group-item">
            <lable class="labeltext">Class</lable>
            <br />
            <input class="input" type="text" placeholder="{{ value.Branch }}" />
          </li>
          <li class="list-group-item">
            <router-link to="/form2">
              <input class="btn" type="button" value="Next" />
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </template>
  <script setup>
   import { onMounted} from "vue";
  
  let obj1 = [];
  
  onMounted(() => {
     obj1.push({
       country: "Pakistan",
       Branch: "Johar Town",
       Class: "A Level"
     });
  
     console.log(obj1);
   });
  </script>
  
  <style scoped>
  .MainText {
    font-style: SemiBold;
    font-size: 34px;
    line-height: 72px;
    vertical-align: Top;
    color: #00264a;
    font-weight: 600;
  }
  .card {
    margin: auto;
    width: 30vw;
    text-align: left;
    border: solid 4px #dbdbdb;
    border-radius: 10px;
  }
  .input {
    border: none;
    font-family: Jost;
  }
  .labeltext {
    color: #00264a;
    font-weight: 600;
    font-size: 14px;
    line-height: 28.9px;
  }
  .list-group-flush {
    border-radius: 10px;
  }
  .btn {
    transform: translateX(12vw);
    display: inline-block;
  
    font-weight: 500;
    font-size: 25px;
    line-height: 50.58px;
  }
  
  /* Media Quiries Start */
  
  @media (max-width: 1880px) and (min-width: 992px) {
    .labeltext {
      font-size: 24px;
    }
    .input {
      font-size: 25px;
    }
    .btn {
      font-size: 30px;
    }
  }
  
  @media screen and (max-width: 1200px) {
    .btn {
      transform: translateX(10vw);
    }
    .card {
      width: 40%;
    }
  }
  
  @media screen and (max-width: 992px) {
    .MainText {
      font-size: 27px;
    }
    .card {
      width: 40%;
    }
    .btn {
      transform: translateX(15vw);
    }
    .labeltext {
      font-size: 22px;
    }
    .input {
      font-size: 20px;
    }
  }
  
  @media screen and (max-width: 768px) {
    .btn {
      transform: translateX(22vw);
    }
    .card {
      width: 60%;
    }
    .labeltext {
      font-size: 22px;
    }
  }
  
  @media screen and (max-width: 575px) {
    .MainText {
      font-size: 16px;
    }
    .card {
      width: 75%;
    }
    .btn {
      transform: translateX(24vw);
    }
  }
  @media screen and (max-width: 575px) {
    .input {
      font-size: 16px;
    }
  }
  </style>