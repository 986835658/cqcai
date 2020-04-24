<template>
  <div id="three">
    <div id="box"></div>
  </div>
</template>

<script>
import * as Three from "three";
import { OrbitControls } from "three-orbit-controls";

export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      cube: null
    };
  },
  methods: {
    init: function() {
      // 获取DOM实例可以用ref代替
      let container = document.getElementById("box");
      // // 获取场景
      // this.scene = new THREE.Scene();
      // // 获取相机
      // this.camera = new THREE.PerspectiveCamera(
      //   75,
      //   container.clientWidth / container.clientHeight,
      //   0.1,
      //   1000
      // );
      
      // 获取渲染器
      // this.renderer = new THREE.WebGLRenderer();
      // let geometry = new THREE.BoxGeometry(1, 1, 1);
      // let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      // this.cube = new THREE.Mesh(geometry, material);
      // this.scene.add(this.cube);
      // this.camera.position.z = 5;
      this.camera = new Three.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 0.6
      this.scene = new Three.Scene()
      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      let material = new Three.MeshNormalMaterial()
      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({antialias: true})
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    animate: function() {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      this.renderer.render(this.scene, this.camera)
      // requestAnimationFrame(this.animate);
      // this.cube.rotation.x += 0.01;
      // this.cube.rotation.y += 0.01;
      // this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.init();
    this.animate();
  }
};
</script>

<style>
/* #three {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#box {
  height: 400px;
  width: 400px;
  margin: auto;
  background: wheat;
}
</style>