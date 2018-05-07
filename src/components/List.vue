<template>
    <!-- 文章列表 -->
    <div id="list-container">
        <ul class="note-list">
            <li v-bind:class="{haveImg: list.img}" v-for="list in articles" :key="list.index">
                <div class="content">
                    <!-- <div class="author">
                        <a href="#" class="avatar">
                            <img class="img" :src="list.author.avatar" >
                        </a>
                        <div class="info">
                            <a href="#" class="nickname">{{list.author.name}}</a>
                            <span class="time">{{list.updated_at}}</span>
                        </div>
                    </div> -->
                <a href="javascript:;"  class="title" target="_blank" @click="readArticle(list.id, list)" >{{list.title}}</a>
                <p class="abstract" v-html="list.text"></p>
                <div class="meta">
                    <a href="javascript:;">
                        <i class="iconfont icon-yuedu"></i>
                        {{ list.reads_count }}
                    </a>
                    <a href="javascript:;">
                        <i class="iconfont icon-detailscomments"></i>
                        {{ list.comments_count }}
                    </a>
                    <a href="javascript:;">
                        <i class="iconfont icon-xihuan1"></i>
                            {{ list.followers_count }}
                    </a>
                </div>
                </div>
                <a href="#" v-if="list.img" class="wrapImg" >
                    <span v-html="list.img"></span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

    props: ['articles'],

     data () {
        return {
            
        }
    },
    methods: {
        readArticle: function (id, article) {
            console.log(id);
            let routeData = this.$router.resolve({ path: '/p/' + id, query:{ id:id, user_id: article.user_id} });
            window.open(routeData.href, '_blank');
            // this.$router.push({
            //     name: 'Article'
            // });
            // console.log(this.$router);
        }
    }
}
</script>

<style lang="less" scopde >
#list-container {
    padding-top: 20px;
}
</style>
