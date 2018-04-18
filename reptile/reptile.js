// 引入包
const axios = require('axios')
const cheerio =  require('cheerio')
const fs = require('fs')

// 目标网址
const url = 'http://jianshu.com/';

// 处理空格和回车
function replaceText(text) {
    return text.replace(/\n/g, "").replace(/\s/g, "");
}

axios.get(url)
    .then((response) => {
        // 解析数据
        let $ = cheerio.load(response.data);

        let recommend = [];
        let lists = [];
        let board = [];

        $('.recommend-collection a').each((index, item) => {
            let _this = $(item);
            recommend.push({
                link: _this.attr('href'),
                img: _this.find('img').attr('src')
            })
        });

        $('#list-container .note-list .have-img').each((index, item) => {
            let _this = $(item);
            lists.push({
                wrap: {
                    link: _this.find('.wrap-img').attr('href'),
                    img: _this.find('.wrap-img img').attr('src')
                },
                content: {
                    author: {
                        avatar: {
                            link: _this.find('.content').find('.avatar').attr('href'),
                            img: _this.find('.content').find('.avatar img').attr('src')
                        },
                        info: {
                            nickname: {
                            link: _this.find('.content').find('.info').find('.nickname').attr('href'),
                            text: replaceText(_this.find('.content').find('.info').find('.nickname').text()),
                            },
                            time: replaceText(_this.find('.content').find('.info').find('.time').text()),
                        },
                        title: {
                            link: _this.find('.content').find('.title').attr('href'),
                            text: replaceText(_this.find('.content').find('.title').text())
                        },
                        abstract: replaceText(_this.find('.content').find('.abstract').text())
                    }
                }
            })
        });

        $('board a').each((index, item) => {
            let _this = $(item);
            board.push({
                link: _this.attr('href'),
                img: _this.find('img').attr('src')
            })
        })

        // 把解析处理过的数据写入json文件中
        fs.writeFile(__dirname + 'test.json', JSON.stringify({
            body: {
                recommend, lists, board
            }
        }), (err) => {
            if(err) {
                console.log(err);
                console.log('写入报错');
            }
        });

        console.log('获取成功');
        
    }).catch( (error) => {
        console.log(error);
    })