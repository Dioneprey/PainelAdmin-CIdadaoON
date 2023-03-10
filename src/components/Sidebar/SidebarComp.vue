<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img src="../../assets/logo.png" alt="vue">
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
      <router-link class="button" to="/solicitacoes">
        <span class="material-icons">face</span>
        <span class="text">Solicitações</span>
      </router-link>
      <router-link class="button" to="/1">
        <span class="material-icons">business</span>
        <span class="text">Secretarias</span>
      </router-link>
      <router-link class="button" to="/graficos">
        <span class="material-icons">analytics</span>
        <span class="text">Gráficos</span>
      </router-link>
      <router-link class="button" to="/3">
        <span class="material-icons">notification_important</span>
        <span class="text">Notificações</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link style="border: 0;" class="button" to="/settings">
        <span class="material-icons">settings</span>
        <span class="text">Configuração</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const toggleMenu = () => {
  is_expanded.value = !is_expanded.value
  localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
  aside {
    display: flex;
    flex-direction: column;
    user-select: none;
    background-color: var(--dark);
    color: var(--light);

    width: calc(2rem + 32px);
    min-height: 100vh;
    padding: 1rem 1rem 0 1rem;

    transition: 0.2s ease-out;

    .flex {
      flex: 1 1 0;
    }

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
              transform: translateX(0.3rem);
            }
          }
      }
    }

    h3, .button .text {
      opacity: 0;
      transition: 0.3s ease-out;
    }

    .menu {
      margin: 0 -1rem;

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
          margin-left: 1rem;
          transition: 0.2s ease-out;
        }

        &:hover, &.router-link-exact-active {
          background-color: var(--dark-alt);
          filter: drop-shadow(0 0 3px var(--dark-alt));
          .material-icons, .text {
            color: var(--primary);
          }
        }

        &.router-link-exact-active {
          border-right: 5px solid var(--primary);
        }
      }
    }

    &.is-expanded {
      width: var(--sidebar-width);

      .menu-toggle-wrap {
        top: -3rem;
        .menu-toggle {
          transform: rotate(-180deg);
        }
      }

      h3, .button .text {
      opacity: 1;
      }

      .button {
        .material-icons {
          margin-right: 1rem;
        }
      }
    }


  }
</style>
