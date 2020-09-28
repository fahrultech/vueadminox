<template>
  <li :class="{active:open}">
    <a href="javascript: void(0);" @click="back">
      <i :class="icon"></i>
      <span>{{ menu.title }}</span>
      <span class="menu-arrow"></span>
    </a>
    <slide-up-down v-if="!$store.state.buka" :active="open">
      <ul
        class="nav-second-level collapse"
        :class="{ in: open }"
        aria-expanded="false"
      >
        <li v-for="(sm, index) in menu.submenu" :key="index">
          <router-link :to="{ name: sm.link }">{{ sm.title }}</router-link>
        </li>
      </ul>
    </slide-up-down>
    <ul v-else
        class="nav-second-level collapse"
        aria-expanded="false"
      >
        <li v-for="(sm, index) in menu.submenu" :key="index">
          <router-link :to="{ name: sm.link }">{{ sm.title }}</router-link>
        </li>
      </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isOpen : false
    };
  },
  props: {
    icon: String,
    menu: {
      title: String,
      submenu: [
        {
          link: String,
          title: String,
        },
      ],
    },
    kunci: Boolean,
  },
  mounted() {},
  created() {},
  computed: {
    open() {
      return this.kunci;
    },
  },
  methods: {
    back() {
      this.$emit("event", this.menu.title, !this.open);
    },
  },
};
</script>