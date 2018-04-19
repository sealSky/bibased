<template>
  <!-- 文章列表 -->
    <div id="list-container">
        <ul class="note-list">
            <li class="have-img" v-for="list in lists" :key="list.index">
                <div class="content">
                    <div class="author">
                        <a href="#" class="avatar">
                            <img class="img" :src="list.content.author.avatar.img" >
                        </a>
                        <div class="info">
                            <a href="#" class="nickname">{{list.content.author.info.nickname.text}}</a>
                            <span class="time">{{list.content.author.info.time}}</span>
                        </div>
                    </div>
                    <a href="#" class="title" target="_blank">{{list.content.author.title.text}}</a>
                    <p class="abstract">{{list.content.author.abstract}}</p>
                </div>
                <a href="#" class="wrap-img">
                    <img :src="list.wrap.img" class="img" />
                </a>
            </li>
            {{test}}
        </ul>
    </div>
</template>

<script>
export default {
   
    props: ['lists', 'test'],

     data () {
        return {
            
        }
    }
}
</script>

<style>

</style>
