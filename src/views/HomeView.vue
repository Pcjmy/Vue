<template>
  <div>
			<div class="top">
				<div class="lert">xiangyuguangchang </div>
				<div class="rs">
					lunbo
				</div>
			</div>
			<div class="content">
				
			</div>
			<div class="tab">
				<div class="list">
					<img src="" alt="">
					<div>
						hahh
					</div>
				</div>
				<div class="list">
					<img src="" alt="">
					<div>
						hahh
					</div>
				</div>
				<div class="list">
					<img src="" alt="">
					<div>
						hahh
					</div>
				</div>
				<div class="list">
					<img src="" alt="">
					<div>
						hahh
					</div>
				</div>
			</div>
		</div>
</template>

<script setup>
</script>

<style scoped>
.top {
  width:95%;
  height: 100px;
  font-size: 30px;
}
.top .lert {
  margin-left: 10%;
  background-color: #f0f;
  float: left;
  width: 40%;
}
.top .rs{
  width: 40%;
  background-color: #99f;
  float: right;
  margin-right: 10%;
}
.content {
  width: 95%;
  height: 300px;
  background-color: aqua;
  border-radius: 20px;
  margin-left: 2.5%;
}
.tab {
  width: 95%;
  height: 200px;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  background-color: #99f;
  border-radius: 20px;
  overflow: hidden;
}
.tab .list{
  width: 25%;
  height: 200px;
}
.tab .list img {
  width: 80%;
  height: 130px;
  margin-left: 10%;
  background-color: #f0f;
}
.tab .list div {
  text-align: center;
  clear: both;
}
</style>
