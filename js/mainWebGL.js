if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var camera, scene, renderer,
    geometry, material, mesh;

init();
animate();

function init() {

    camera = new THREE.Camera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;

    scene = new THREE.Scene();

    geometry = new THREE.CubeGeometry( 200, 200, 200 );
    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    mesh = new THREE.Mesh( geometry, material );
    scene.addObject( mesh );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth , window.innerHeight );
    
    renderer.domElement.style.overflow = "hidden";

    document.body.appendChild( renderer.domElement );
    
    stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	stats.domElement.style.display = 'block';
	document.body.appendChild( stats.domElement );
	
	window.addEventListener( 'resize', onWindowResize, false );

}

function animate() {

    // Include examples/js/RequestAnimationFrame.js for cross-browser compatibility.
    requestAnimationFrame( animate );
    render();

}

function render() {

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

	stats.update();

    renderer.render( scene, camera );

}



function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
