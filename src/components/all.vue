<template>
  <div class="add-component">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">添加待做事项</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        placeholder="...todo"
        aria-describedby="emailHelp"
        v-model="valTodo"
        @keyup.enter="addTodoList('valTodo')"
      />
      <div id="emailHelp" class="form-text">
        回车即可添加
      </div>
    </div>
    <ul class="list-group">
      <li
        class="list-group-item"
        :ref="
          el => {
            elArr[index] = el
          }
        "
        v-for="(item, index) of v_TodoList"
        :key="item"
      >
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="item"
            v-model="checked"
            id="flexCheckDefault"
          />
          <label
            style="width:100%"
            class="form-check-label"
            for="flexCheckDefault"
          >
            {{ item }}
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import {
  computed,
  defineComponent,
  onMounted,
  onUpdated,
  reactive,
  ref,
  toRefs
} from 'vue'

export default defineComponent({
  name: 'All',
  setup () {
    const state = reactive({
      valTodo: '' as string,
      checked: true
    })

    const addTodoList = () => {
      if (!state.valTodo) {
        return
      }
      store.commit('addTodoList', state.valTodo.trim())
      state.valTodo = ''
    }
    const elArr = ref([] as HTMLElement[])
    onMounted(() => {
      console.log(elArr.value)
      console.log(elArr.value[0])
    })

    onUpdated(() => {
      console.log(elArr.value.length)
      console.log(elArr.value[0])
    })

    return {
      ...toRefs(state),
      v_TodoList: computed(() => store.state.todoList),
      addTodoList,
      elArr
    }
  }
})
</script>

<style lang="scss"></style>
