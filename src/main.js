//scene
const scene = new THREE.Scene();

//camera
const fov = 75;
const aspect = innerWidth / innerHeight;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 6;
/* 
playing with camera positions: (need more examples to understand)
camera.position.x = -60;
camera.position.y = 150;
camera.position.z = 10;
camera.lookAt(scene.position);
 */

//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

//plane
const planeGeometry = new THREE.PlaneGeometry(5,2);
//see README for explaination about constructor
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);

console.log(
    "x:" + plane.position.x + "\n" +
    "y:" + plane.position.y + "\n" +
    "z:" + plane.position.z + "\n"
);

//animation
function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

