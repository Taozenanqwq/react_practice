// 使用 Mock
var Mock = require('mockjs')
const hamburgers = ['香辣鸡腿堡', '奥尔良鸡腿堡', '劲脆鸡腿堡', '麦辣鸡腿堡', '巨无霸', '浓香牛肉汉堡', '牛肉芝士汉堡', '香辣鸡肉汉堡', '中式汉堡', '德克萨斯汉堡']
const imgs = ['static/images/ham1.webp', 'static/images/ham2.webp', 'static/images/ham3.webp', 'static/images/ham4.webp', 'static/images/ham5.webp', 'static/images/ham6.webp', 'static/images/ham7.webp', 'static/images/ham8.webp', 'static/images/ham9.webp', 'static/images/ham10.webp']
export const data = Mock.mock({
  foodList: [
    {
      id: 0,
      url: imgs[0],
      name: hamburgers[6],
      description: '@CSENTENCE(18,32)',
      price: '@INTEGER(20,40)'
    },
    {
      id: 1,
      url: imgs[1],
      name: hamburgers[1],
      description: '@CSENTENCE(18,32)',
      price: '@INTEGER(20,40)'
    },
    {
      id: 2,
      url: imgs[2],
      name: hamburgers[2],
      description: '@CSENTENCE(18,32)',
      price: '@INTEGER(20,40)'
    },
    {
      id: 3,
      url: imgs[3],
      name: hamburgers[3],
      description: '@CSENTENCE(18,32)',
      price: '@INTEGER(20,40)'
    },
    {
      id: 4,
      url: imgs[4],
      name: hamburgers[4],
      description: '@CSENTENCE(18,32)',
      price: '@INTEGER(20,40)'
    },
    {
      id: 5,
      url: imgs[5],
      name: hamburgers[5],
      description: '@CSENTENCE(18,32)',
      price: '@INTEGER(20,40)'
    },
    {
      id: 6,
      url: imgs[6],
      name: hamburgers[6],
      description: '@CSENTENCE(18,32)',
      price: '@INTEGER(20,40)'
    },
    {
      id: 7,
      url: imgs[7],
      name: hamburgers[7],
      description: '@CSENTENCE(18,32)',
      price: '@INTEGER(20,40)'
    },
    {
      id: 8,
      url: imgs[8],
      name: hamburgers[8],
      description: '@CSENTENCE(18,32)',
      price: '@INTEGER(20,40)'
    },
    {
      id: 9,
      url: imgs[9],
      name: hamburgers[9],
      description: '@CSENTENCE(18,32)',
      price: '@INTEGER(20,40)'
    }
  ]
})
