<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">Home (Week 5)</a>
        </li>
        <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        <li class="nav-item">
          <router-link to="/addbook" class="nav-link">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/booklist" class="nav-link">Book List</router-link>
        </li>
          <li class="nav-item">
            <router-link to="/FireLogin" class="nav-link">Firebase Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/FireRegister" class="nav-link">Firebase Register</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Dashboard" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/GetBookCount" class="nav-link">Get Book Count</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/AddBookFirebase" class="nav-link">AddBookFirebase</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/WeatherCheck" class="nav-link">Get Weather</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/CountBookAPI" class="nav-link">Count Book API</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/GetAllBookAPI" class="nav-link">Get All Book API</router-link>
          </li>
      </ul>
    </header>
  </div>
</template>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}
.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}
.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
