<template>
   <li>
    <router-link :class="{'active' : open}" :to="'/'+link" @click.native="back">
      <i :class="icon"></i>
      <span>{{ title }}</span>
    </router-link>
  </li>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: {
    icon : String,
    link: String,
    title: String,
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
        this.$emit('event',this.title, !this.open);
      }
  }
};
</script>