/**
 * 생산설비 + 물류설비의 공통적인 추상 Class
 * 위치정보 x,y,z
 */
export class Equip {
  constructor(info){
    this.x = info.x;
    this.y = info.y;
    this.z = info.z;
  }
}