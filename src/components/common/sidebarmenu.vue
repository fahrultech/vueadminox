<style scoped>
.active {
  background-color: #64c5b1!important;
}
</style>
<template>
  <li>
    <a :class="{'active' : open}" href="javascript: void(0);" @click="back">
      <i :class="icon"></i>
      <span>{{ menu.title }}</span>
      <span class="menu-arrow"></span>
    </a>
    <slide-up-down :active="open">
      <ul class="nav-second-level" aria-expanded="false">
        <li v-for="(sm, index) in menu.submenu" :key="index">
          <router-link :to="{name:sm.link}">{{ sm.title }}</router-link>
        </li>
      </ul>
    </slide-up-down>
  </li>
</template>

<script>
export default {
  data() {
    return {
      
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
    kunci: Boolean
  },
  created(){
   
  },
  computed: {
      open(){
          return this.kunci;
      }
  },
  methods:{
      back(){
        this.$emit('event',this.menu.title, !this.open);
      }
  }
};
</script>