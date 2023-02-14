<template>
  <span>相遇广场</span>
  <Input placeholder="消息通知" type="cache-search" />
  <CardShow
    msg1="脱单墙"
    url="person.png"
    msg2="寻找属于我的另一半"
  />
  <ContentShow
    url1="nearby.png"
    msg1="附近店铺"
    url2="nearby.png"
    msg2="附近店铺"
    url3="nearby.png"
    msg3="附近店铺"
    url4="nearby.png"
    msg4="附近店铺"
  />
  <ContentShow
    url1="nearby.png"
    msg1="附近店铺"
    url2="nearby.png"
    msg2="附近店铺"
    url3="nearby.png"
    msg3="附近店铺"
    url4="nearby.png"
    msg4="附近店铺"
  />
  <PartShow
    url1="shop.png"
    msg1="乐享商城"
    url2="shop.png"
    msg2="乐享商城"
    url3="shop.png"
    msg3="乐享商城"
  />
  <SceneShow
    url1="scene.png"
    url2="scene.png"
  />
  <DynamicShow
    url="photo.png"
    username="YOGO"
    age="18"
    msg="亲爱的旅行者，「演武传心」活动即将开启~冒险等阶≥30级
        且完成魔神任务「离岛逃离计划」
        ※ 完成雷电将军传说任务「天下人之章 第二幕」后体验更佳。
        ※ 活动期间，如果没有完成雷电将军传说任务"
  />
  <DockerShow
    url1="home.png"
    msg1="首页"
    url2="home.png"
    msg2="首页"
    url3="home.png"
    msg3="首页"
    url4="home.png"
    msg4="首页"
  />
</template>

<script setup>
import CardShow from '../components/CardShow'
import ContentShow from '../components/ContentShow'
import PartShow from '../components/PartShow'
import SceneShow from '../components/SceneShow'
import DynamicShow from '../components/DynamicShow'
import DockerShow from '../components/DockerShow'
</script>

<style scoped>
span {
  margin-right: 60px;
}

input {
  border-radius: 5px;
  /* margin-left: 150px; */
  border: 1px solid #ccc;
  vertical-align: top;
}
</style>
