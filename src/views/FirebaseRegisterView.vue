
  <template>
    <div class="container mt-5">
      <div class="form-group">
          <h1 class="text-center">Create an Account</h1>
          <form @submit.prevent="register">
              <div class="form-group">
                  <label for="email" class="form-label">Email:</label>
                  <input type="text" class="form-control" v-model="email" id="email" required />
              </div>
              <div>
                  <label for="password" class="form-label">Password:</label>
                  <input type="text" class="form-control" v-model="password" id="password" required />
              </div>
              <!-- <select v-model="role">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select> -->
              <button @click="register">Save to Firebase</button>
          </form>
      </div>
    </div>
  </template>

  <script>
  import { ref } from 'vue';
  import db  from '../firebase/init.js';
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  import { doc, setDoc } from 'firebase/firestore';

  export default {
    setup() { 
      const email = ref('');
      const password = ref('');
      const router = useRouter();
      const auth = getAuth();

      const role = ref('user');

      
      const register = async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        // const userRef = doc(db, 'users', userCredential.user.uid); 
        // await setDoc(userRef, { role: role.value }); 
        const user = userCredential.user;
        await setDoc(doc(db, 'roles', user.uid), {role: 'user'});
        console.log("Registration successful with role:", role.value);
            router.push('/FireLogin'); 
          } catch (error) {
            console.error("Error during registration:", error.message);
          }
        };

    return {
          email,
          password,
          register
        };
      },
    };


  
  </script>
  