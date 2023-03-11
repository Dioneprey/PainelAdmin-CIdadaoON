<!-- eslint-disable vue/no-mutating-props -->
<template>
  <main>
    <div class="pageselect">
      <div @click="pageatual > 1 ? pageatual-- : pageatual = 1" class="pagination">
        <span class="material-icons">navigate_before</span>
        <p>Voltar</p>
      </div>
      <div class="div-border"></div>
      <div class="pageatual">
        <span>{{ pageatual }}</span>
          de <e>{{ limit }}</e>
      </div>
      <div class="div-border"></div>
      <div @click="pageatual < limit ? pageatual++ : pageatual = limit" class="pagination">
        <p>Avançar</p>
        <span class="material-icons">navigate_next</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
name: "PaginationComp",
props: {
  pageatual: Number,
  limit: Number
  }
}
</script>

<style lang="scss" scoped>
main {
  background: var(--light);
}
.pageselect {
  margin-top: 50px;
  padding: 0 min(2vw, 30px);
  float: right;
  display: flex;
  align-items: center;
  font-size: 16px;
  user-select: none;
  .div-border {
    margin: 0 10px;
    height: 20px;
  }
  .pagination {
    display: flex;
    align-items: center;
    span {
      cursor: pointer;
      color: var(--primary);
      font-size: 32px;
    }
    p {
      cursor: pointer;
    }

  }
  .pageatual {
    display: flex;
    align-items: center;
    color: grey;

    e {
      color: black;
      margin-left: 5px;
    }
    span {
      padding: 3px 12px;
      color: black;
      display: flex;
      margin-right: 5px;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      border: 1px solid var(--border-color);
    }
  }
}
</style>
