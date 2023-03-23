<template>
  <div>
    <div class="block text-3xl font-extrabold tracking-wider mb-35px">
      <span>Все пиццы</span>
    </div>
    <div class="cards grid grid-cols-4 gap-x-14 gap-y-16 relative">
      <div class="card" v-for="item in this.$store.state.pizzas" :key="item.id">
        <div class="card-header flex flex-col justify-center mb-5">
          <div class="card-img flex justify-center">
            <img :src="item.imageUrl" alt="..." />
          </div>
          <div class="card-title text-xl font-extrabold text-center mt-2.5">
            <span>{{ item.name }}</span>
          </div>
        </div>
        <div class="card-body bg-white-5 p-2 rounded-10px mb-4">
          <div class="flex mb-1.5">
            <button
              class="py-2 flex-1 text-center rounded-5px text-sm font-bold shadow-tt"
              v-for="typeItem in item.types"
              :key="typeItem"
              :class="
                pizza.id == item.id
                  ? pizza.type == typeItem
                    ? 'bg-white-1'
                    : ''
                  : ''
              "
              @click="typesMethod(item, typeItem)"
            >
              {{ typeItem }}
            </button>
          </div>
          <div class="flex">
            <button
              class="py-2 flex-1 text-center rounded-5px text-sm font-bold shadow-tt"
              v-for="size in item.sizes"
              :key="size"
              :class="
                pizza.id == item.id
                  ? pizza.size == size
                    ? 'bg-white-1'
                    : ''
                  : ''
              "
              @click="sizeMethod(item, size)"
            >
              {{ size }} sm
            </button>
          </div>
        </div>
        <div class="card-footer flex justify-between space-x-8">
          <div class="font-extrabold text-2xl flex items-center">
            <span>от {{ item.price }}₽</span>
          </div>
          <div>
            <button
              class="border border-orange-2 text-base py-2 px-4 rounded-large font-bold flex items-center justify-between gap-2 btn"
              :class="
                item.count !== 0 ? 'text-orange-1 ' : 'text-white-1 bg-orange-1'
              "
              @click.prevent="addPizza(item)"
            >
              + Добавить
              <span
                class="bg-orange-1 text-white-1 w-22px h-22px rounded-50% items-center flex justify-center text-xs"
                v-if="item.count !== 0"
              >
                {{ item.count }}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="loader">
        <div
          v-if="loader"
          class="static top-10 left-0 right-0 bottom-0 bg-black-2"
        >
          <Loader />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getTransitionRawChildren } from "vue";
import Loader from "./Loader.vue";

export default {
  components: {
    Loader,
  },
  data() {
    return {
      pizzas: [],
      pizza: {
        id: null,
        type: "",
        size: null,
      },
      size: "",
      types: "",
      loader: null,
      basket: [],
    };
  },
  methods: {
    async getDB() {
      this.loader = true;
      const response = await axios.get("./data/db.json");
      const res = await response.data;
      this.$store.state.pizzas = res.pizzas;
      this.pizzas = this.$store.state.pizzas;
      this.loader = false;
    },
    addPizza(item) {
      let index = -1;
      const pizza = JSON.parse(
        JSON.stringify({
          id: this.pizza.id,
          type: this.pizza.type,
          size: this.pizza.size,
          count: 1,
        })
      );
      if (this.pizza.id == item.id) {
        if (this.pizza.type !== "" && this.pizza.size !== null) {
          this.$store.commit("countIncrement", { value: item.id });
          if (this.basket.length != 0) {
            index = this.basket.findIndex(
              (el) =>
                el.id === item.id &&
                el.type == pizza.type &&
                el.size == pizza.size
            );
          }
          console.log(item.id);
          console.log(index, "index");
          if (index == -1) {
            this.basket.push(pizza);
          } else {
            this.basket[index].count++;
          }
        }
      }
      console.log("basket", this.basket);
      this.pizza.count = 1;
    },
    typesMethod(item, typeItem) {
      this.pizza.id = item.id;
      this.pizza.type = typeItem;
    },
    sizeMethod(item, size) {
      if (this.pizza.id == item.id) {
        this.pizza.size = size;
      }
    },
  },
  mounted() {
    this.getDB();
  },
};
</script>
