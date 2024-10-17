
  <template>
    <div class="container mt-5">
      <div class="form-group">
          <h1 class="text-center">Login</h1>
          <form @submit.prevent="login">
              <div class="form-group">
                  <label for="email" class="form-label">Email:</label>
                  <input type="text" class="form-control" v-model="email" id="email" required />
              </div>
              <div>
                  <label for="password" class="form-label">Password:</label>
                  <input type="text" class="form-control" v-model="password" id="password" required />
              </div>
              <button @click="login">Login via Firebase</button>
              <p v-if="loginError" style="color: red;">{{ loginErrorMessage }}</p>
          </form>
      </div>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  import db from '../firebase/init.js';
  import { doc, getDoc } from 'firebase/firestore';
  
  const email = ref('');
  const password = ref('');
  const loginError = ref(false);
  const loginErrorMessage = ref('');
  // const db = useFirestore();

  const router = useRouter();
  const auth = getAuth();
  const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    console.log("Firebase Login Successful!");

    // Example of fetching data from Firestore after login
    const userDoc = doc(db, 'users', user.uid);
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }

    router.push("/Dashboard");
  } catch (error) {
    console.error("Error during login:", error);
    loginError.value = true;
    loginErrorMessage.value = error.message;
  }
};
  </script>
  
 <style>
.container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
}
input[type="text"] {
  width: 50%;
  padding: 8px;
  margin: 10px 0;
}
button {
  background-color: #007BFF;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>