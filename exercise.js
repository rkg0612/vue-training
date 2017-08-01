

	var artic = new Vue({
  el: '#articles',
  data: {
    articleList: [
      { id: 0, 
        articleTitle: 'Article Title No. 1',
        articledesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, harum odit! Consequuntur nobis, culpa ab molestias natus laboriosam, dolorum a sint quaerat dicta amet adipisci inventore cupiditate reprehenderit qui minus.',
        artReadStat: false,
        artReadText: 'Unread',
        seen:true
      },
      { id: 1, 
        articleTitle: 'Article Title No. 2',
        articledesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo iure mollitia ea sit quia, a, nobis autem, tenetur id suscipit officiis vitae doloribus numquam accusantium consequuntur doloremque velit quisquam corporis.',
        artReadStat: false,
        artReadText: 'Unread',
        seen:true
        },

      { id: 2, 
        articleTitle: 'Article Title No. 3',
        articledesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero enim libero saepe nobis qui nam labore perferendis, sit, odit ipsum assumenda. Pariatur inventore perferendis quaerat, illo quasi quidem facere dolore.',
        artReadStat: false,
        artReadText: 'Unread',
        seen:true
        },
      { id: 3, 
        articleTitle: 'Article Title No. 4',
        articledesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet, beatae. Saepe explicabo, quos porro nulla architecto mollitia blanditiis aliquam. Animi sint veniam, architecto impedit dicta molestiae iste nam aperiam.',
        artReadStat: false,
        artReadText: 'Unread',
        seen:true
        },
      { id: 4, 
        articleTitle: 'Article Title No. 5',
        articledesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi minima nulla eligendi rerum fuga, explicabo possimus nam tempora blanditiis dolore sunt itaque minus nostrum quis rem animi dolor, sit. Doloremque.',
        artReadStat: false,
        artReadText: 'Unread',
        seen:true
        },
      { id: 5, 
        articleTitle: 'Article Title No. 6',
        articledesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, totam nobis sunt maiores quaerat ex perspiciatis aliquam architecto vero eum facilis, dignissimos. Placeat quos obcaecati asperiores esse distinctio voluptas tempora.',
        artReadStat: false,
        artReadText: 'Unread',
        seen:true
        },
      { id: 6, 
        articleTitle: 'Article Title No. 7',
        articledesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic officia deleniti, quaerat eveniet optio sapiente pariatur porro minima consectetur doloremque vero, suscipit natus ipsam quam quis. Rem modi sit fugiat!',
        artReadStat: false,
        artReadText: 'Unread',
        seen:true
        },
      { id: 7, 
        articleTitle: 'Article Title No. 8',
        articledesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus accusantium ipsam nemo, iste possimus, eius! Tenetur ducimus voluptates fugit illo ipsam, fugiat eveniet aperiam, rerum doloremque iste suscipit est eum!',
        artReadStat: false,
        artReadText: 'Unread',
        seen:true
        },
      { id: 8, 
        articleTitle: 'Article Title No. 9',
        articledesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, alias nihil placeat, at sunt consequatur aperiam mollitia eum nostrum ullam molestiae id eos, eaque laboriosam fugit sequi voluptatum nemo quas.',
        artReadStat: false,
        artReadText: 'Unread',
        seen:true
      },
      { id: 9, 
        articleTitle: 'Article Title No. 10',
        articledesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero incidunt obcaecati, dolore! In natus, quo labore sint veniam voluptatem quidem fuga! Labore rerum in beatae iste iure unde minus a.',
        artReadStat: false,
        artReadText: 'Unread',
        seen:true
      }
    ]
  },
  methods: {
    readStat: function (id) {
      this.articleList[id].artReadStat 
      if(this.articleList[id].artReadStat == false){
        this.articleList[id].artReadStat = true
        this.articleList[id].artReadText = 'Read'
      }else{
        this.articleList[id].artReadStat = false
        this.articleList[id].artReadText = 'Unread'
      }
    },
    filterRead: function () {
      for (var i = 0; i <= 9; i++) {
        if(this.articleList[(i)].artReadText == 'Read'){
          this.articleList[(i)].seen = true
        }else{
          this.articleList[(i)].seen = false
        }
      }
    },
    filterUnread: function () {
      for (var i = 0; i <= 9; i++) {
        if(this.articleList[(i)].artReadText == 'Unread'){
          this.articleList[(i)].seen = true
        }else{
          this.articleList[(i)].seen = false
        }
      }
    },
    removeFilter: function () {
      for (var i = 0; i <= 9; i++) {
        this.articleList[(i)].seen = true
      }
    }
  }
})