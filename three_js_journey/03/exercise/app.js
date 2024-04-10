import * as THREE from "three"

const canvas = document.querySelector("canvas.webgl");


// SCENE
const scene = new THREE.Scene();


// OBJECT
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color :"red", wireframe:true });
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);


// CAMERA 
const sizes = {
    width:800,
    height:600
};
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 3;
scene.add(camera);



// RENDERER 
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width,sizes.height);


// RENDER 
renderer.render(scene,camera);
