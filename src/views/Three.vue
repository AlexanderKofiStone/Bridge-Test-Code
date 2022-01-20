<template>
  <div class="one">
    <div class="title">{{ title }}</div>
    <div class="grid">
      <router-link to="/two"><button class="btnTwo"><img class="arrow" src="@/assets/objects/arrow.png" /></button></router-link>
      <router-link to="/last"><button class="btn"><img src="@/assets/objects/arrow.png" /></button></router-link>
      <h3>{{ questionThree }}</h3>
      <input class="input" type="number" placeholder="30" @keydown.enter="add" v-model="adding">
      <h4>press enter to add to total</h4>
      <h2>{{ $store.state.result }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "calculating your total costs",
      questionThree: "Approximately how many suppliers are you using for industrial supplies?",
      adding: 0,
    };
  },
   methods: {
    add() {
      this.$store.state.result += this.adding
    }
  },
};
</script>

<style lang="scss" scoped>
.one {
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url("../assets/background/office.jpg");
  background-size: cover;
  height: 100vh;
  h3 {
    @include center;
    left: 39.5%;
    font-size: $medium-large;
    color: #db2f20;
    font-family: $font-one;
    width: 500px;
     @media(max-width: 1600px) {
      width: 400px;
    }
  }
 h4 {
    @include center;
    left: 82.6%;
    top: 57%;
    font-size: $small;
    color: #db2f20;
    font-family: $font-one;
    width: 400px;
  }
    h2 {
     @include center;
    left: 90%;
    top: 10%;
    font-size: $medium-large;
    color: #db2f20;
    font-family: $font-one;
    width: 100px;
    padding: 10px;
    box-shadow: $box-shadow;
    background-color: $white;
    cursor: pointer;
  }
  .input {
      @include center;
      left: 74%;
      padding: 20px;
      border: none;
      width: 130px;
      height: 30px;
      border-radius: 10px;
      font-size: $medium-large;
      color: $dark;
      font-family: $font-one;
      box-shadow: $box-shadow;
  }
  .btn {
    @include center;
    top: 50%;
    left: 60%;
    height: 50px;
    width: 50px;
    border-radius: 5rem;
    box-shadow: $box-shadow;
    background-color: $white;
    cursor: pointer;
    border: none;
    background-color: #db2f20;
    color: $white;
  }
  .btnTwo {
    @include center;
    top: 50%;
    left: 20%;
    height: 50px;
    width: 50px;
    border-radius: 5rem;
    box-shadow: $box-shadow;
    background-color: $white;
    cursor: pointer;
    border: none;
    background-color: #db2f20;
    color: $white;
  }

  .title {
    @include center;
    top: 20%;
    text-transform: uppercase;
    font-size: $medium-large;
    color: #db2f20;
    font-family: $font-one;
  }
   .arrow {
    transform: rotate(180deg);
    margin-right: 9px;
  }
  img {
    width: 25px;
    margin-left: 5px;
  }
}
</style>