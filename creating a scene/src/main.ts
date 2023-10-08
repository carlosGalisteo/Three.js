//importamos three//

import * as THREE from "three";

//creamos la escena//
const scene = new THREE.Scene();
//scene.background = new THREE.Color("0x34495E")

//creamos la camara//
const camera = new THREE.PerspectiveCamera(
  75, //fov
  window.innerWidth/ window.innerHeight, //Aspect ratio
  0.1, //Near
  1000 //Far
)
//posicionamos la camara
camera.position.set(0,0,2)

//creamos el render
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

/* Creamos un cubo.Un cubo está formado por una
geometría y un material.
*/
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  wireframe: true
})
const cube = new THREE.Mesh(geometry, material)

//Añadimos el cubo a la escena
scene.add(cube)

// Creamos otro cubo
const cube2 = new THREE.Mesh(geometry, material)
cube2.position.x = 5
scene.add(cube2)

/*Añadimos un evento que se active cuando se
cambia el tamaño de la vista del documento*/

window.addEventListener('resize', onWindowResize, false)

function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  render()
}

function render(){
  renderer.render(scene, camera)
}

function animate(){

  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  render()
}

animate()

