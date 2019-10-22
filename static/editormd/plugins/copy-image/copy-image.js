/*!
 * Link dialog plugin for Editor.md
 *
 * @file        link-dialog.js
 * @author      pandao
 * @version     1.2.0
 * @updateTime  2015-03-07
 * {@link       https://github.com/pandao/editor.md}
 * @license     MIT
 */

(function() {
  
  var factory = function(exports) {
    
    exports.fn.uploadImage = function(imageFile) {
      var _this = this;
      return new Promise(((resolve, reject) => {
        var formData = new FormData();
        formData.append('editormd-image-file', imageFile);
        $.ajax({
          url: _this.settings.imageUploadURL,
          type: 'POST',
          cache: false,
          data: formData,
          processData: false,
          contentType: false,
          xhrFields: {
            withCredentials: true,
          },
        }).done(function(res) {
          if (res.success === 1) {
            resolve(res);
          } else {
            reject(res);
          }
        }).fail(function(res) {
          reject(res);
        });
      }));
    };
    exports.fn.copyImage = function() {
      
      var _this = this; // this == the current instance object of Editor.md
      var cm = this.cm;
      var lang = _this.lang;
      var settings = _this.settings;
      var editor = this.editor;
      var classPrefix = this.classPrefix;
      this.editor.on('paste', function(event) {
        if (event.clipboardData || event.originalEvent) {
          var clipboardData = (event.clipboardData ||
            event.originalEvent.clipboardData);
          var items = clipboardData.items;
          debugger
          for (var i = 0, len = items.length; i < len; i++) {
            if (items[i].type.indexOf('image') === 0) {
              _this.uploadImage(items[i].getAsFile()).then((res) => {
                cm.execCommand("goLineEnd");
                cm.execCommand("newlineAndIndent");
                cm.replaceSelection('![](' + res.url + ')');
              });
            }
          }
        }
      });
      this.editor.on('dragover', function(event) {
        event.preventDefault();
      });
      this.editor.on('drop', function(event) {
        event.preventDefault();
        if (event.dataTransfer || event.originalEvent) {
          var clipboardData = (event.dataTransfer ||
            event.originalEvent.dataTransfer);
          var items = clipboardData.items;
          for (var i = 0, len = items.length; i < len; i++) {
            if (items[i].type.indexOf('image') === 0) {
              _this.uploadImage(items[i].getAsFile()).then((res) => {
                cm.execCommand("goLineEnd");
                cm.execCommand("newlineAndIndent");
                cm.replaceSelection('![](' + res.url + ')');
              });
            }
          }
        }
      });
      
    };
    
  };
  
  // CommonJS/Node.js
  if (typeof require === 'function' && typeof exports === 'object' &&
    typeof module === 'object') {
    module.exports = factory;
  } else if (typeof define === 'function')  // AMD/CMD/Sea.js
  {
    if (define.amd) { // for Require.js
      
      define(['editormd'], function(editormd) {
        factory(editormd);
      });
      
    } else { // for Sea.js
      define(function(require) {
        var editormd = require('./../../editormd');
        factory(editormd);
      });
    }
  } else {
    factory(window.editormd);
  }
  
})();
