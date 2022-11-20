import * as THREE from '../node_modules/three/build/three.module.js';
import { common } from './common.js';

export const mesh = ()=>{
  /**
   * Mesh 는 우리가 그려줄 물체라고 생각하면 된다.
   * 외형(frame) 과 재질이라는 속성을 가지고 Mesh 를 만들어주면 된다.
   */
  const geometry = new THREE.BoxGeometry(1,1,1);
  const material = new THREE.MeshBasicMaterial({
    color:'red',
  });
  const mesh = new THREE.Mesh(geometry,material);
  common.scene.add(mesh);

  
}



