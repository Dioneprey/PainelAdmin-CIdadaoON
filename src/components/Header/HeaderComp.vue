<template>
  <header>
    <div class="container">
      <nav>
        <div class="title">
          <span>{{ title }}</span>
        </div>
        <div class="flex"></div>
        <router-link class="button" to="/settings">
          <span class="material-icons">account_circle</span>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {
    title: String
 }
}
</script>

<style Lang="scss" scoped>
header {
  background: var(--light);
  height: 90px;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 400;
  display: flex;
}
header span {
  font-size: 1.8rem;
}
nav {
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e2e2;
}
.flex {
  flex: 1 1 0;
}
.material-icons {
  font-size: 40px;
  color: var(--dark-alt);
}
</style>
