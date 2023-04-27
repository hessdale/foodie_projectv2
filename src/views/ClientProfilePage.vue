<template>
  <div>
    <client-profile></client-profile>
    <button @click="editstatus">edit profile</button>
    <section v-if="edit === true">
      <client-edit-profile></client-edit-profile>
    </section>
  </div>
</template>

<script>
import ClientProfile from "@/components/ClientProfile.vue";
import ClientEditProfile from "@/components/ClientEditProfile.vue";

export default {
  methods: {
    editstatus() {
      this.edit = true;
    },
  },
  data() {
    return {
      edit: false,
    };
  },
  components: {
    ClientProfile,
    ClientEditProfile,
  },
};
</script>

<style scoped>
</style>