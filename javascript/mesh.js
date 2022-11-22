import * as THREE from '../node_modules/three/build/three.module.js';
import { common } from './common.js';
import {ProductEquip} from './equip/ProductEquip.js';


/**
 * scene 에 mesh 를 추가할 때는 여기서 추가해주자.
 */
export const mesh = ()=>{

  new ProductEquip({
    x: 1,
    y: 1,
    z: 1,
    cycleTime : 10,//제품 생산 주기
    outputCapacity : 4,
  });
}



