<template>
  <div class="home">
    <div class="title">{{ title }}</div>
    <div class="grid">
      <div class="lineOne">
        <estimate class="item" :name="one" :num="a" @click="$store.state.result += a" />
        <estimate class="item" :name="two" :num="b" @click="$store.state.result += b" />
        <estimate class="item" :name="three" :num="c" @click="$store.state.result += c" />
      </div>
      <div class="lineTwo">
        <estimate class="item" :name="four" :num="a" @click="$store.state.result += a" />
        <estimate class="item" :name="five" :num="d" @click="$store.state.result += d" />
        <estimate class="item" :name="six" :num="e" @click="$store.state.result += e" />
      </div>
      <div class="lineThree">
        <estimate class="item" :name="seven" :num="f" @click="$store.state.result += f" />
        <estimate class="item" :name="eight" :num="a" @click="$store.state.result += a" />
        <estimate class="item" :name="nine" :num="g" @click="$store.state.result += g" />
      </div>
      <div class="last">
        <keep-alive>
          <total class="item" :name="ten" :result="$store.state.result"></total>
        </keep-alive>
      </div>
    </div>
    <router-link to="/one"><button class="btn">Continue</button></router-link>
  </div>
</template>

<script>
import Estimate from "@/components/Estimate.vue";
import Total from "@/components/Total.vue";
export default {
  components: {
    Estimate,
    Total,
  },
  data() {
    return {
      title: "calculating your total costs",
      one: "Identify requirements",
      two: "Request a quotation",
      three: "Find products",
      four: "Raise an order",
      five: "Authorise sale",
      six: "Pay provider",
      seven: "Deliver product",
      eight: "Invoice check",
      nine: "Place order",
      ten: "TOTAL",
      a: 6.0,
      b: 3.0,
      c: 16.0,
      d: 21.0,
      e: 13.0,
      f: 4.0,
      g: 6.0,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url("../assets/background/office.jpg");
  background-size: cover;
  height: 100vh;
  .btn {
    @include center;
    top: 80%;
    left: 70%;
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

  .title {
    @include center;
    top: 20%;
    text-transform: uppercase;
    font-size: $medium-large;
    color: #db2f20;
    font-family: $font-one;
  }
  .lineOne {
    display: flex;
    @include placement;
    top: 40%;
    left: 50%;
  }
  .lineTwo {
    display: flex;
    @include placement;
    top: 50%;
    left: 50%;
  }
  .lineThree {
    display: flex;
    @include placement;
    top: 60%;
    left: 50%;
  }
  .last {
    display: flex;
    @include placement;
    top: 75%;
    left: 50%;
  }
  .item {
    margin: 20px;
  }
}
</style>