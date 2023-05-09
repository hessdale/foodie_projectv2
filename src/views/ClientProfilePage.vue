<template>
  <div>
    <client-profile></client-profile>
    <client-edit></client-edit>
  </div>
</template>

<script>
import ClientProfile from "@/components/ClientProfile.vue";
import ClientEdit from "@/components/ClientEdit.vue";

export default {
  components: {
    ClientProfile,
    ClientEdit,
  },
};
</script>

<style scoped>
div {
  margin-top: 20px;
}
</style>