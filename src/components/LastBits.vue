<template>
  <div class="estimate">
    <div class="card">
      <h3>{{ name }}</h3>
      <h5>£{{ num }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    num: {
      type: Number,
      required: true,
    },
  },
  data() {},
};
</script>

<style lang="scss" scoped>
.estimate {
  .card {
    height: 40px;
    width: 400px;
    border-radius: 5rem;
    box-shadow: $box-shadow;
    background-color: $white;
    cursor: pointer;
    border-right: 160px solid #db2f20;
  }
  h3 {
    top: 11%;
    margin-left: 47px;
    position: relative;
    color: $dark;
    font-family: $font-one;
  }
  h5 {
    top: -70%;
    font-size: $medium-large;
    margin-left: 420px;
    position: relative;
    color: $white;
    font-family: $font-one;
  }
}
</style>