scene = new THREE.Scene()

// RED CUBE 
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:'#ff0000'})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

//SIZES
const sizes = {
    width : 800,
    height: 600
}

//CAMERA
const camera = new THREE.PerspectiveCamera(75,sizes.width / sizes.height)
camera.position.z = 3 
scene.add(camera)

//RENDRER
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width,sizes.height)

renderer.render(scene,camera)