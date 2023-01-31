circ=[20,50,130,190,230,270,310,350,380,400]
for(i = 0 ; i != 10 ;i++){
    new Zdog.Ellipse({
        addTo: Fshape,
        diameter: circ[i],
        stroke: i*-1,
        color: 'black',
        translate:{
            z: i * 10
        }
    });
}


function animate() {





    Fshape.updateRenderGraph();
    requestAnimationFrame(animate);
}
// start animation
animate();