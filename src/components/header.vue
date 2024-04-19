<template>
  <header>
    <h1>Header</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/notfond">404</router-link>
    </nav>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  color: crimson;
}
</style>
