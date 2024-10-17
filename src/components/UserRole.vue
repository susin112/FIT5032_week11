<template>
    <div v-if="userRole === 'admin'">
      <AdminComponent />
    </div>
    <div v-else>
      <UserComponent />
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import { getAuth } from 'firebase/auth';
  import { doc, getDoc, getFirestore } from 'firebase/firestore';
  

  export default {
    setup() {
      const auth = getAuth();
      const db = getFirestore();
      const userRole = ref('');
  
      onMounted(async () => {
        if (auth.currentUser) {
          const roleRef = doc(db, 'roles', auth.currentUser.uid);
          const roleSnap = await getDoc(roleRef);
          if (roleSnap.exists()) {
            userRole.value = roleSnap.data().role;
          } else {
            console.error('No role found for the user');
          }
        }
      });
  
      return { userRole };
    },
  };
  </script>
  
  ////////////////