Component({
  properties: {
    // xie | qingli | bangzhu | guanyu | anquan | suo | shouji | u | shezhi1 | shezhi2 | gengduo1 | shangcheng | souyisou | jifen | saoyisao | ic-wenjian | shezhi | back-copy | back | 9bi16 | 1bi1 | 3bi4 | P-bili | quanping1 | daojishi4 | daojishi3 | daojishi2 | shandian | shandian1 | shandian2 | sixing | xiaoxi | dongtai | qiandao | didian | erweima | erweima1 | shexiangji | shexiangji-copy | daojishi | shuaxin2 | xiangji | luxiang | guanbi | liebiao2-copy | liebiao2 | wide | wide-copy | sousuo-copy | sousuo | duihao | jiahao-dange | yishoucang | yishoucang-copy | yinle | pinglun | fenxiang | bofang | shanchuguanbicha | tubiaozhizuo- | down_x | radio-outlined | radio | shouji54 | gongzhonghao | QQ-shixin
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: 18 / 750 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});
