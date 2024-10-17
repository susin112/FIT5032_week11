<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container mt-5">
      <h1 class="text-center">Welcome, {{ userDisplayName }}</h1>
      <div class="form-group">
        <form @submit.prevent="logout">
          <p>Your role: {{ userRole }}</p>
          <button @click="logout">Logout</button>
        </form>
      </div>
    </div>
</template>
  
<script>
  import { ref, onMounted } from 'vue';
  import { getAuth, signOut } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  


  export default {
    // components: {
    //   AdminComponent,
    //   UserComponent
    // },
    setup() {
      const auth = getAuth();
      const router = useRouter();
      const userDisplayName = ref('');
      const userRole = ref('User'); 

      onMounted(() => {
        if (auth.currentUser) {
          userDisplayName.value = auth.currentUser.email; 
          userRole.value = auth.currentUser.email.includes('@admin.com') ? 'Admin' : 'User';
        }
      });

      const logout = async () => {
        if (auth.currentUser) {
          console.log('Current user:', auth.currentUser.email); 
          try {
            await signOut(auth);
            console.log('User logged out successfully');
            router.push("/FireLogin");
          } catch (error) {
            console.error('Error during logout:', error);
          }
        } else {
          console.log('No user currently logged in');
        }
    };
    return { userRole, logout };
  }
};
</script> 


<style>
  .centered-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; 
    text-align: center;
  }
</style> 

<!-- <template>
  <div class="dashboard">
    <AdminComponent v-if="userRole === 'admin'" />
    <UserComponent v-else />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getAuth } from 'firebase/auth';
import db from '../firebase/init';
import { doc, getDoc } from 'firebase/firestore';

import AdminComponent from '../components/AdminComponent.vue';
import UserComponent from '../components/UserComponent.vue';

export default {
  components: {
    AdminComponent,
    UserComponent
  },
  setup() {

    // const userDisplayName = ref('');
    const userRole = ref(); 
    // const auth = getAuth();

    // onMounted(() => {
    //   if (auth.currentUser) {
    //     userDisplayName.value = auth.currentUser.email; 
    //     userRole.value = auth.currentUser.email.includes('@admin.com') ? 'Admin' : 'User';
    //   }
    // });

    onMounted(async () => {
      const auth = getAuth();
      if (auth.currentUser) {
        const roleRef = doc(db, 'roles', auth.currentUser.uid);
        const roleSnap = await getDoc(roleRef);
        if (roleSnap.exists()) {
          userRole.value = roleSnap.data().role;
        }
      }
    });

    return { userRole };
  }
};
</script> -->
