import { World } from "./world.js";
import { VRSPACE } from "../client/vrspace.js";
import { VRSPACEUI } from "../ui/vrspace-ui.js";

/**
 * Helper class, provides mesh visibility methods.
 */
export class VisibilityHelper {
  constructor(world = World.lastInstance) {
    this.world = world;
    this.scene = world.scene;
  }
  
  dispose() {
  }
  
  /**
   * Returns true if target mesh is visible, performs least expensive checks first, then more expensive ones.
   * It's supposed to test multiple points of the mesh, tests only one for the time being.
   * Calls this.isClosestMesh to determine visibility.
   * @param target babylonjs mesh to test for visibility
   * @param {number} [confidence=1] minimum number of points required to be visible
   * @param {Vector3} [offset=new BABYLON.Vector3(0,0,0)] offset to add to mesh position before testing 
   */
  isVisible( target, confidence=1, offset=new BABYLON.Vector3(0,0,0) ) {
    //console.log("isVisible "+target.name+" confidence "+confidence+" offset "+offset);
    let ret = 0;
    let camera = this.scene.activeCamera;
    if (camera.isInFrustum(target)) {
      // center
      if (this.isClosestMesh(camera, target, target.position.add(offset))) {
        ret++;
      }
      if ( ret < confidence ) {
        // bounding box - slow
        let bBox = target.getHierarchyBoundingVectors();
        let height = bBox.max.y - bBox.min.y;
        let points = [
          // TODO additional points to check
          // we could use positions of head, shoulders, arms, legs etc here
          // at the moment, just approximate the center
          new BABYLON.Vector3(target.position.x, target.position.y+height*.5, target.position.z)
        ]
        for ( let i = 0; ret<confidence && i < points.length; i++ ) {
          if (this.isClosestMesh(camera, target, points[i])) {
            ret++;
          }
        }
      }
    }
    return ret>=confidence;
  }
  
  /**
   * Casts a ray from the camera to the point, and returns true if the mesh is hit.
   * Mesh may be root node of the scene, or any mesh in the scene. 
   */
  isClosestMesh(camera, mesh, point) {
    let direction = point.subtract(camera.position).normalize();
    let ray = new BABYLON.Ray(camera.position,direction,camera.maxZ);
    let closest = this.scene.pickWithRay(ray, (test) => test.isVisible);
    //if ( closest && closest.hit ) {
      //console.log("Picked "+closest.pickedMesh.name+" root "+VRSPACEUI.findRootNode(closest.pickedMesh).name+ " at "+point+" distance "+closest.distance);
    //}
    return closest && closest.hit && (closest.pickedMesh === mesh || mesh === VRSPACEUI.findRootNode(closest.pickedMesh));
  }
  
  /**
   * Traverses VRObject scene, and returns visible avatars.
   */
  getVisibleAvatars(confidence=1) {
    let ret = [];
    for ( let vrObject of VRSPACE.getScene().values() ) {
      if ( typeof vrObject.avatar != "undefined" && this.isVisible(vrObject.avatar.baseMesh(), confidence, new BABYLON.Vector3(0,vrObject.avatar.userHeight*.5,0))) {
        //console.log( "Visible: "+vrObject.id+" "+vrObject.avatar.name);
        ret.push(vrObject.avatar);
      }
    }
    return ret;
  }

  /**
   * Traverses all VRObjects in the scene, and returns avatars out of active camera frustrum 
   */
  getAvatarsOutOfView() {
    return VRSPACE.getScene().values().filter(vrObject=>vrObject.avatar != "undefined" && this.scene.activeCamera.isInFrustrum(vrObject.avatar.baseMesh()) );
  }
  
  /**
   * Traverses scene root nodes, and returns visible objects.
   */
  getVisibleObjects(confidence=1) {
    let ret = [];
    this.scene.rootNodes.forEach( (node) => {
      if ( typeof node.vrObject != "undefined" && this.isVisible(node, confidence)) {
        ret.push(node);
      }
    });
    return ret;
  }

  /** Traverses give babyolonjs node array, and returns visible nodes */  
  getVisibleOf(nodeArray, confidence=1) {
    let ret = [];
    nodeArray.forEach( (node) => {
      if ( this.isVisible(node, confidence)) {
        ret.push(node);
      }
    });
    return ret;
  }

  /** Traverses given User array, and returns array of visible User objects */
  getVisibleUsers(userArray, confidence=1) {
    let ret = [];
    userArray.forEach( (user) => {
      if ( typeof user.avatar != "undefined" && this.isVisible(user.avatar.baseMesh(), confidence)) {
        ret.push(user);
      }
    });
    return ret;
  }
  
}