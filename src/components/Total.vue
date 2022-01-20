<template>
  <div class="estimate">
    <div class="card">
      <h3>{{ name }}</h3>
      <h5>£{{ result }}</h5>
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
      result: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      est: "estimate",
    };
  },
};
</script>

<style lang="scss" scoped>
.estimate {
  .card {
    height: 70px;
    width: 340px;
    border-radius: 5rem;
    box-shadow: $box-shadow;
    background-color: $white;
    h3 {
      top: 30%;
      margin-left: 47px;
      position: relative;
      color: purple;
      font-family: $font-one;
    }
    h4 {
      text-transform: uppercase;
      font-size: $small;
      @include center;
      top: 2%;
      position: relative;
      margin-left: 160px;
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
      color: #cebce1;
    }
    h5 {
      top: -23.5%;
      margin-left: 220px;
      position: relative;
      color: #db2f20;
      font-family: $font-one;
      font-size: 30px;
    }
  }
}
</style>