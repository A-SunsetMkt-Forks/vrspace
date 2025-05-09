import { World, Terrain, TerrainEditor, WorldManager, Skybox } from './js/vrspace-min.js';

export class TerrainEditorExample extends World {
  constructor(params) {
    super(params);
    this.lastIndex = -1;
  }
  async load() {
    // we're not loading any models
    // but we're displaying UI instead
    this.connect();
  }
  async createCamera() {
    this.camera = this.firstPersonCamera(new BABYLON.Vector3(0, 2, -2));
    this.camera.ellipsoid = new BABYLON.Vector3(.1, .1, .1); // dolphins are not humans
    this.camera.setTarget(new BABYLON.Vector3(0,2,0));
    this.camera.speed = .2;
    this.camera.applyGravity = false;
    return this.camera;
  }

  async createGround() {
    // no ground
  }
  
  async createLights() {
    var light = new BABYLON.DirectionalLight("light", new BABYLON.Vector3(-1, -1, 0), this.scene);
    light.intensity = .3;
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), this.scene);
    return light1;
  }
  
  async createSkyBox() {
    return new Skybox(this.scene, this.assetPath("/content/skybox/eso_milkyway/milkyway")).create();
  }

  createTerrain() {
    this.terrain = new Terrain(this);

    this.terrain.terrainMaterial = new BABYLON.StandardMaterial("terrainMaterial", this.scene);
    //var terrainTexture = new BABYLON.Texture(this.assetPath("textures/LoamWalls0012_2_S_1_1_baseColor.jpeg"), this.scene);
    //this.terrain.terrainMaterial.ambientTexture = terrainTexture;
    this.terrain.terrainMaterial.specularColor = new BABYLON.Color3(.3, .3, .3);
    this.terrain.terrainMaterial.diffuseColor = new BABYLON.Color3(0, .5, 0);
    this.terrain.terrainMaterial.emissiveColor = new BABYLON.Color3(0, 0, 0);
    //this.terrain.terrainMaterial.wireframe = true;
    //terrainTexture.uScale = 4.0;
    //terrainTexture.vScale = terrainTexture.uScale;

    this.terrain.init(this.scene);
    this.terrainEditor = new TerrainEditor(this);
    this.terrainEditor.edit();
  }
  
  connect() {
    new WorldManager(this);
    //this.worldManager.debug = true; // multi-user debug info
    //this.worldManager.VRSPACE.debug = true; // network debug info
    this.worldManager.remoteLogging = true; // send javascript logs to server
    this.worldManager.enter({mesh:'//www.vrspace.org/babylon/dolphin.glb'}).then(
      //() => this.worldEditor = new WorldEditor(this, this.fileInputElement)
      this.initXR()
    );
  }

}

export const WORLD = new TerrainEditorExample();