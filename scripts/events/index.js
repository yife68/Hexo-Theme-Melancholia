/*!
  Theme: hexo-theme-Melancholia
  Author: 亦封
  Maintainer: @yife68
  Maintainer-GitHub: https://github.com/yife68

  theme - GitHub: https://github.com/yife68/hexo-theme-Melancholia
*/

/*!
主题: hexo-theme-Melancholia
作者: 亦封
维护人员: @yife68
维护人员的GitHub个人地址: https://github.com/yife68

主题的GitHub个人地址: https://github.com/yife68/hexo-theme-Melancholia
*/

/* global hexo */

'use strict';


hexo.on('generateBefore', () => {
    require('./lib/hello')(hexo);
});