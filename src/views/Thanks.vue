<template>
  <div class="one">
    <div class="title">{{ title }}</div>
    <div class="grid">
      <h3>{{ bye }}</h3>
      <router-link to="/"
        ><button class="btn" @click="restart">Restart</button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "done",
      bye: "Thank you for using the Bridge Sales Enablement Agency calculator. A representative will be in touch with you soon.",
    };
  },
  methods: {
    restart() {
      this.$store.state.result = 0;
    },
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
    left: 50%;
    font-size: $medium-large;
    color: #db2f20;
    font-family: $font-one;
    width: 600px;
    text-align: center;
  }
  h4 {
    @include center;
    top: 65%;
    left: 30%;
    font-size: $small;
    color: $dark;
    font-family: $font-one;
    width: 500px;
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
    top: 65%;
    left: 50%;
    height: 50px;
    width: 200px;
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
    top: 80%;
    left: 20%;
    height: 50px;
    width: 150px;
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
}
.lastSection {
  @include center;
  left: 70%;
  .item {
    margin: 10px;
  }
}
</style>