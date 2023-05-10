<template>
  <div>
    <client-profile></client-profile>
    <client-edit></client-edit>
  </div>
</template>

<script>
import ClientProfile from "@/components/ClientProfile.vue";
import ClientEdit from "@/components/ClientEdit.vue";
import cookies from "vue-cookies";

export default {
  components: {
    ClientProfile,
    ClientEdit,
  },
  mounted() {
    if (cookies.get(`token`) === null) {
      this.$router.push(`/clientlogin`);
    }
  },
};
</script>

<style scoped>
div {
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;
  text-align: center;
}
</style>