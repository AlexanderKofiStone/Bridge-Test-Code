<template>
  <div class="one">
    <div class="title">{{ title }}</div>
    <div class="grid">
      <router-link to="/three"
        ><button class="btnTwo">Go back</button></router-link
      >
      <router-link to="/thanks"
        ><button class="btn">Send me this report</button></router-link
      >
      <h3>{{ last }}</h3>
      <h4>{{ next }}</h4>
    </div>
    <div class="lastSection">
      <last-bits class="item" :name="one" :num="a" />
      <last-bits class="item" :name="two" :num="b" />
      <last-bits class="item" :name="three" :num="c" />
      <last-bits class="item" :name="four" :num="d" />
      <last-bits class="item" :name="five" :num="e" />
      <last-total class="item" :name="six" :num="f" />
    </div>
  </div>
</template>

<script>
import LastBits from "@/components/LastBits.vue";
import LastTotal from "@/components/LastTotal.vue";
export default {
  components: {
    LastBits,
    LastTotal,
  },
  data() {
    return {
      title: "calculating your total costs - your results",
      last: "By utilising the Bridge Sales Enablement Agency calculator organisations can simplify the processes associated with indirect procurement and unlock significant typical savings of up to 60% of process costs.",
      next: "Based on what you have told us about your process we can estimate that the following costs are being insured within your procurement processes.",
      one: "Supplier & product",
      two: "Quotation to order process",
      three: "Expediting & receiving orders",
      four: "Processing invoices",
      five: "Paying suppliers",
      six: "Total Process Costs (year)",
      a: 89.6,
      b: 168.2,
      c: 106.4,
      d: 173.6,
      e: 22.4,
      f: 560.5,
    };
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
    left: 30%;
    font-size: $medium-large;
    color: #db2f20;
    font-family: $font-one;
    width: 500px;
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
    top: 80%;
    left: 60%;
    height: 50px;
    width: 300px;
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