import {common } from "../common.js";
import { Equip } from "./Equip.js";
import { Mesh, BoxGeometry, MeshBasicMaterial } from "../../node_modules/three/build/three.module.js";



/**
 * 생산 설비의 일정 생산 주기마다 제품이 생산되고
 * 생산된 제품을 출고포트로 내보낸다.
 * 이때 출고포트가 꽉 차 있는 경우 생산이 되면 안된다.
 */
export class ProductEquip extends Equip {
  constructor(info){
    super(info);
    this.cycleTime = info.cycleTime;//제품 생산 주기
    this.outputCapacity = info.outputCapacity//출고 포트 버퍼 개수

    this.geometry = new BoxGeometry(this.x,this.y,this.z);
    this.material = new MeshBasicMaterial({color:'gray'});
    this.mesh = new Mesh(this.geometry, this.material);
    common.scene.add(this.mesh);
  }

  
}



