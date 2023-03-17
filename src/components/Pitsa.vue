<template>
  <div>
    <div class="block text-3xl font-extrabold tracking-wider mb-35px">
      <span>Все пиццы</span>
    </div>
    <div class="cards grid grid-cols-4 gap-x-14 gap-y-16 relative">
      <div class="card" v-for="item in pitsas" :key="item.id">
        <div class="card-header flex flex-col justify-center mb-5">
          <div class="card-img flex justify-center">
            <img :src="item.image" alt="" />
          </div>
          <div class="card-title text-xl font-extrabold text-center mt-2.5">
            <span>{{ item.name }}</span>
          </div>
        </div>
        <div class="card-body bg-white-5 p-2 rounded-10px mb-4">
          <div class="flex mb-1.5">
            <button
              class="py-2 flex-1 text-center rounded-5px text-sm font-bold shadow-tt"
              :class="[item.structure == 'thin' ? 'bg-white-1' : '']"
              @click="structure(item.id, 'thin')"
            >
              тонкое
            </button>
            <button
              class="flex-1 py-2 text-center rounded-5px text-sm font-bold shadow-tt"
              :class="[item.structure == 'trad' ? 'bg-white-1' : '']"
              @click="structure(item.id, 'trad')"
            >
              традиционное
            </button>
          </div>
          <div class="flex">
            <button
              class="py-2 flex-1 text-center rounded-5px text-sm font-bold shadow-tt"
              :class="item.sizeBtn == 'sm' ? 'bg-white-1' : ''"
              @click="sizeMethod(item.id, 'sm')"
            >
              26 см.
            </button>
            <button
              class="py-2 flex-1 text-center rounded-5px text-sm font-bold shadow-tt"
              :class="item.sizeBtn == 'md' ? 'bg-white-1' : ''"
              @click="sizeMethod(item.id, 'md')"
            >
              30 см.
            </button>
            <button
              class="py-2 flex-1 text-center rounded-5px text-sm font-bold shadow-tt"
              :class="item.sizeBtn == 'xl' ? 'bg-white-1' : ''"
              @click="sizeMethod(item.id, 'xl')"
            >
              40 см.
            </button>
          </div>
        </div>
        <div class="card-footer flex justify-between space-x-8">
          <div class="font-extrabold text-2xl flex items-center">
            <span
              >от
              {{
                item.sizeBtn == "sm"
                  ? item.price.small
                  : item.sizeBtn == "md"
                  ? item.price.medium
                  : item.price.big
              }}
              ₽</span
            >
          </div>
          <div>
            <button
              class="border border-orange-2 text-base py-2 px-4 rounded-large font-bold flex items-center justify-between gap-2 btn"
              :class="
                item.count !== 0 ? 'text-orange-1 ' : 'text-white-1 bg-orange-1'
              "
              @click="addPitsa(item.id)"
            >
              + Добавить
              <span
                class="bg-orange-1 text-white-1 w-22px h-22px rounded-50% items-center flex justify-center text-xs"
                v-if="item.count !== 0"
                >{{ item.count }}</span
              >
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
import Loader from "./Loader.vue";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      pitsas: [],
      pitsa: {},
      loader: true,
      pitsaType: false,
      korzina: [],
    };
  },
  mounted() {
    this.getPitsas();
  },
  methods: {
    async getPitsas() {
      this.loader = true;
      const response = await axios.get("./data/pitsa.json");
      const res = await response.data;
      this.pitsas = res;
      console.log(res);
      this.loader = false;
    },
    addPitsa(id) {
      this.pitsas.forEach((item) => {
        if (item.id == id) {
          item.count++;
          const pitsa = {
            id: id,
            name: item.name,
            image: item.image,
            count: 1,
            sizeBtn: item.sizeBtn,
            structure: item.structure,
            price:
              item.sizeBtn == "sm"
                ? item.price.small
                : item.sizeBtn == "md"
                ? item.price.medium
                : item.price.big,
          };
          this.pitsa = pitsa;
        }
      });
      //
      if (this.korzina.length !== 0) {
        this.korzina.forEach((item) => {
          if (item.id === this.pitsa.id) {
            if (
              item.sizeBtn == this.pitsa.sizeBtn &&
              item.structure == this.pitsa.structure
            ) {
              item.count += 1;
              item.price = this.pitsa.price;
            } else if (
              item.sizeBtn !== this.pitsa.sizeBtn ||
              item.structure !== this.pitsa.structure
            ) {
              this.korzina.push(this.pitsa);
            }
          } else {
            this.korzina.push(this.pitsa);
          }
        });
      } else {
        this.korzina.push(this.pitsa);
      }
      console.log(this.pitsa, "pista");
      console.log(this.korzina, "korzinka");
    },
    ///
    structure(id, format) {
      this.pitsas.forEach((item) => {
        if (item.id === id) {
          if (format == "trad") {
            item.structure = "trad";
            if (!this.size) {
              item.price.small = Math.round(item.price.small * 1.1);
              item.price.medium = Math.round(item.price.medium * 1.1);
              item.price.big = Math.round(item.price.big * 1.1);
              this.size = true;
            }
          } else if (format == "thin") {
            item.structure = "thin";
            if (this.size) {
              item.price.small = Math.round(item.price.small / 1.1);
              item.price.medium = Math.round(item.price.medium / 1.1);
              item.price.big = Math.round(item.price.big / 1.1);
              this.size = false;
            }
          }
        }
      });
    },
    sizeMethod(id, type) {
      this.pitsas.forEach((item) => {
        if (item.id == id) {
          item.sizeBtn = type;
        }
      });
    },
  },
};
</script>
<style lang=""></style>
