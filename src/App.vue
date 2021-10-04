<template>
  <v-app>
    <v-app-bar app>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        Buttons Component
      </div>
      <v-spacer></v-spacer>
      <v-btn color="primary" href="https://github.com/j17hernandez/ButtonComponent" target="_blank">
        Go to repository
        <v-icon color="yellow">mdi-star-shooting-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-list dense v-if="list.length > 0">
              <v-subheader>Languages</v-subheader>
              <v-list-item-group v-model="selected" color="primary">
                <v-list-item v-for="(item, i) in list" :key="i">
                  <v-list-item-icon>
                    <v-icon :color="item.color"> {{ item.icon }} </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title> {{ item.text }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-container v-else>
              <h3>List Empty</h3>
              <v-img
                :src="require('./assets/empty.png')"
                width="100%"
                height="100%"
                alt="empty"
              />
            </v-container>
            <SimpleButton
              color="red"
              outlined
              :disabled="selected == undefined || list.length == 0"
              @click="deleteItem"
              title="Button with icon"
            >
              Delete
            <v-icon color="red">mdi-close</v-icon>
            </SimpleButton>
            <SimpleButton
              class="ml-5"
              color="success"
              @click="addItem"
              :disabled="range == 0"
              title="Simple Button"
            >
              Add
              <v-icon>mdi-plus</v-icon>
            </SimpleButton>
          </v-col>
          <v-col cols="6">
            <v-list dense v-if="secondList.length > 0">
              <v-subheader>List Languages</v-subheader>
              <v-list-item-group v-model="selectedSecond" color="primary">
                <v-list-item v-for="(item, i) in secondList" :key="i">
                  <v-list-item-icon>
                    <v-icon :color="item.color"> {{ item.icon }} </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title> {{ item.text }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-container v-else>
              <h3>List Empty</h3>
              <v-img
                :src="require('./assets/empty.png')"
                width="100%"
                height="100%"
                alt="empty"
              />
            </v-container>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2 class="text-center">Others Buttons</h2>
            <SimpleButton
              class="ml-5"
              color="warning"
              title="Button only text"
              text
            >Only Text</SimpleButton>
            <SimpleButton
              class="ml-5"
              color="success"
              title="Button only icon"
              icon
            >
              <v-icon>mdi-check</v-icon>
            </SimpleButton>
            <SimpleButton
              class="ml-5"
              color="#164D88"
              title="Button rounded"
              dark
              rounded
            >
            Button rounded
            <v-icon>mdi-close</v-icon>
            </SimpleButton>
            <SimpleButton
              class="ml-5"
              color="pink"
              title="Button Fab"
              dark
              fab
              rounded
            >
            <v-icon>mdi-close</v-icon>
            </SimpleButton>
            <SimpleButton
              class="ml-5"
              color="purple"
              title="Button Fab"
              dark
              @click="Btnloading"
              :loading="loading"
            >
            click to loading
            </SimpleButton>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SimpleButton from "./components/SimpleButton.vue";

export default {
  name: "App",

  components: {
    SimpleButton,
  },
  data() {
    return {
      dialog: false,
      selected: 0,
      selectedSecond: 0,
      loading: false,
      range: 8,
      list: [
        {
          text: "JavaScript",
          icon: "mdi-language-javascript",
          color: "yellow",
        },
        {
          text: "TypeScript",
          icon: "mdi-language-typescript",
          color: "primary",
        },
      ],
      secondList: [
        {
          text: "C",
          icon: "mdi-language-c",
          color: "primary",
        },
        {
          text: "C++",
          icon: "mdi-language-cpp",
          color: "primary",
        },
        {
          text: "C#",
          icon: "mdi-language-csharp",
          color: "purple",
        },
        {
          text: "Ruby",
          icon: "mdi-language-ruby",
          color: "red",
        },
        {
          text: "Swift",
          icon: "mdi-language-swift",
          color: "orange",
        },
        {
          text: "PHP",
          icon: "mdi-language-php",
          color: "primary",
        },
        {
          text: "Java",
          icon: "mdi-language-java",
          color: "primary",
        },
        {
          text: "Python",
          icon: "mdi-language-python",
          color: "primary",
        },
      ],
    };
  },
  methods: {
    async deleteItem() {
      await this.secondList.push(this.list[this.selected]);
      await this.list.splice(this.selected, 1);
      this.range++;
    },
    async addItem() {
      const initial = 0;
      if (this.secondList.length > 0 && this.range > 0) {
        const num = initial + Math.floor(Math.random() * this.range);
        let item = this.secondList[num];
        if (item != undefined) {
          await this.list.push(item);
          await this.secondList.splice(num, 1);
          --this.range;
        }
      }
    },
    Btnloading() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  },
};
</script>
