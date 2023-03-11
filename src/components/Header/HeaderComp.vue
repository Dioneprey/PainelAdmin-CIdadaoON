<template>
  <header>
    <div class="container">
      <nav :class="`${border ? 'semborder' : ''}`">
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
    title: String,
    border: Boolean
 }
}
</script>

<style Lang="scss" scoped>
header {
  user-select: none;
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
  border-bottom: 1px solid var(--border-color);
}
.semborder {
  border-bottom: none;
}
.flex {
  flex: 1 1 0;
}
.material-icons {
  font-size: 40px;
  color: var(--dark-alt);
}
</style>
