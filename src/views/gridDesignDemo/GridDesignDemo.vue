<!-- 
    question:
    1. 页面上有一个网格布局，展示多个产品卡片，产品卡片的样式内容不限，可以只使用背景色填充。
    2. 在屏幕宽度为 1200px 及以上时，网格应当显示 4 列 的产品卡片。
    3. 在屏幕宽度在 768px - 1199px 之间时，网格应当显示 2 列 的产品卡片。
    4. 在屏幕宽度低于 768px 时，网格应当显示 1 列 的产品卡片。
    5. 产品卡片间距为 20px，网格布局应当适配不同屏幕宽度进行响应式调整。
    degisn：
    1、use grid layout
    2、use media query method adapt to screen size
 -->
<template>
    <!-- productionList -->
    <div class="grid-container">
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
    </div>
</template>

<script>
export default {
    name: "GridDesignDemo"
}
</script>

<style scoped>
.grid-container {
    display: grid;
    gap: 20px;
    margin-top: 100px;
}
.grid-container .grid-item {
    background-color: aqua;
    width: 100px;
    height: 50px;
    text-align: center;
}
/* width >= 1200px */
@media (min-width: 1200px) {
    .grid-container {
        grid-template-columns: repeat(4, 1fr);
    }
}
/* width >= 768px &&  width <= 1199px*/
@media (min-width: 768px) and (max-width: 1199px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
/* width < 768px */
@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: repeat(1, 1fr);
    }
}

</style>