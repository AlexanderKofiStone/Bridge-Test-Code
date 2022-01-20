<template>
  <div class="estimate">
    <div class="card">
      <h3>{{ name }}</h3>
      <h5>£{{ $store.state.result + 560.2}}</h5>
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
    width: 160px;
    border-radius: 5rem;
    box-shadow: $box-shadow;
    background-color: $white;
    cursor: pointer;
    border-left: 400px solid purple;
  }
  h3 {
    top: 11%;
    margin-left: -352px;
    position: relative;
    color: $white;
    font-family: $font-one;
  }
  h5 {
    top: -70%;
    font-size: $medium-large;
    margin-left: 20px;
    position: relative;
    color: $black;
    font-family: $font-one;
  }
}
</style>