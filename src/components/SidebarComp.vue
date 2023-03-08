<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img src="../assets/logo.png" alt="vue">
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/cidadaos">
        <span class="material-icons">face</span>
        <span class="text">Cidadãos</span>
      </router-link>
      <router-link class="button" to="/cidadaos">
        <span class="material-icons">business</span>
        <span class="text">Secretarias</span>
      </router-link>
      <router-link class="button" to="/cidadaos">
        <span class="material-icons">analytics</span>
        <span class="text">Gráficos</span>
      </router-link>
      <router-link class="button" to="/cidadaos">
        <span class="material-icons">notification_important</span>
        <span class="text">Solicitações</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(false)
const toggleMenu = () => {
  is_expanded.value = !is_expanded.value
}
</script>

<style lang="scss" scoped>
  aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    .logo {
      margin-bottom: 1rem;

      img {
        width: 2rem;
      }
    }
    .menu-toggle-wrap {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1rem;

      position: relative;
      top: 0;
      transition: 0.2s ease-out;

      .menu-toggle {
        transition: 0.2s ease-out;

          .material-icons {
            font-size: 2rem;
            color: var(--light);
            transition: 0.2s ease-out;
          }

          &:hover {
            .material-icons {
              color: var(--primary);
              transform: translateX(0.2rem);
            }
          }
      }
    }


    h3, .button .text {
      opacity: 0;
      margin-left: 10px;
      transition: 0.3s ease-out;
    }

    .menu {
      display: flex;
      flex-direction: column;

      .button {
        display: flex;
        color: var(---light);
        align-items: center;
        text-decoration: none;
        border-bottom: 1px solid var(--dark-alt);
        padding: 1.5rem 0;
        transition: 0.1s ease-out;

        .material-icons {
          font-size: 2rem;
          transition: 0.2s ease-out;
        }
      }
      .button:hover {
          color: var(--primary);
      }
    }

    &.is-expanded {
      width: var(--sidebar-width);

      .text {
      opacity: 1;
      }
      .menu-toggle-wrap {
        top: -3rem;
        .menu-toggle {
          transform: rotate(-180deg);
        }
      }
    }

    @media (max-width: 768px) {
      position: fixed;
      z-index: 99;
    }
  }
</style>
