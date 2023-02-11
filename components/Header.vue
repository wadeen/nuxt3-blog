<template>
  <header class="navbar">
    <div class="container">
      <h1><NuxtLink to="/">Nuxt.js×contentful</NuxtLink></h1>
      <nav>
        <ul>
          <li><NuxtLink to="/menu01">Menu.01</NuxtLink></li>
          <li><NuxtLink to="/menu02">Menu.02</NuxtLink></li>
          <li><NuxtLink to="/menu03">Menu.03</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  background-color: whitesmoke;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100%, 1200px);
  margin: 0 auto;
  height: 80px;
}
h1 {
  font-weight: 900;
  font-size: 1.5em;
}

nav > ul {
  display: flex;
  gap: 15px;
}
</style>
