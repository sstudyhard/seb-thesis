document.addEventListener('DOMContentLoaded', function() {
    var scene = document.querySelector('a-scene');
    var splash = document.querySelector('#splash');
    scene.addEventListener('loaded', function (e) {
        splash.style.display = 'none';
    });
}); 

function showManifesto () {
  console.log('here for the manifesto')
}

AFRAME.registerComponent('show-manifesto', {
  schema: {
    on: {type: 'string'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    el.addEventListener('click', function () {
      console.log('it happened')
    });
  }
});

AFRAME.registerComponent('my-alpha-test', {
  dependencies: ['material'],

  init: function () {
    var material = this.el.getObject3D('mesh').material;
    material.alphaTest = 0.5;
    material.needsUpdate = true;
  }
});