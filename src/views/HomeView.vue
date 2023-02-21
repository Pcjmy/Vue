<template>
  <div id="app">
    <input ref="searchInput" type="text" placeholder="请输入关键词" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const searchInput = ref(null); // 定义一个ref对象

onMounted(() => {
  // 在组件挂载后
  const input = searchInput.value; // 获取输入框元素
  input.addEventListener("input", debounce(search, 500)); // 给输入框添加input事件监听器，并使用防抖函数包装搜索功能
});

function search(e) {
  // 定义搜索功能
  console.log("searching", e.target.value);
  // 这里可以根据输入框的值进行搜索操作，比如发送请求或过滤数据等
}

function debounce(fn, delay) {
  let timer = null; // 定义一个定时器变量
  return function () {
    let context = this; // 保存当前上下文
    let args = arguments; // 保存当前参数
    if (timer) {
      clearTimeout(timer); // 如果已经有定时器，则清除
    }
    timer = setTimeout(function () {
      // 设置一个新的定时器
      fn.apply(context, args); // 在延迟时间后执行回调函数
    }, delay);
  };
}
</script>

<style scoped></style>
