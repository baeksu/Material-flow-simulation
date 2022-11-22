///////////////////////////////////////////////////////
// Option 1: Import the entire three.js core library.
import * as THREE from '../node_modules/three/build/three.module.js'
import {common} from "./common.js";
import {mesh} from './mesh.js';

/**
 * Camera 및 render 관련은 여기다가.
 */
const render = ()=>{
  /**
   * renderer 를 통해서 브라우저에 threejs 를 그려줄 수 있다.
   * canvas 태그에 renderer 를 추가해주자.
   */

  const renderer = new THREE.WebGLRenderer({
    canvas:common.canvas,
    antialias : true, // 계단현상 제거
  });
  renderer.setSize(window.innerWidth,window.innerHeight);
  
  
  //Scene 은 화면에 보여줄 무대라고 생각하면 된다.
  const scene = common.scene;
  const camera = new THREE.PerspectiveCamera(    
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 10;
  

  mesh();
  scene.add(camera);

  // 이벤트 감지해서 동적 화면 변경 대응
  // 종횡비를 다시 설정해주면 된다.
  const setSize = ()=>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();//카메라의 변화가 있을 때 실행해줘야 하는 메서드
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }
  //창 크기 변경 EventListener
  window.addEventListener('resize',setSize);





  //마지막으로 렌더러를 통해서 렌더링을 하면 된다. 이때 무대와, 카메라를 넣어서 생성해 줄 수 있다.
  renderer.render(scene,camera);
}


render();