circ = [200, 350, 465, 530, 570, 590, 590, 570, 530, 465, 350, 200]
space = 320
var sphere = new Zdog.Group({
    addTo: Fshape,
});
for (i = 0; i != circ.length; i++) {
    new Zdog.Ellipse({
        addTo: sphere,
        diameter: circ[i],
        stroke: 4,
        color: 'green',
    });
    if (i <= 6) {
        sphere.children[i].translate.z = space
        space = space - 50
    }
    else {
        sphere.children[i].translate.z = space
        space = space - 50
    }
}
var cube = new Zdog.Group({
    addTo: Fshape,
    translate: {
        z: 320
    }
});
for (i = 0; i != 40; i++) {
    let rect = new Zdog.Rect({
        addTo: cube,
        width: 800,
        height: 800,
        stroke: 1.5,
        color: 'white',
        translate: {
            z: i * -17
        }
    });
}
function animate() {
    sphere.rotate.y += 0.01
    Fshape.updateRenderGraph();
    requestAnimationFrame(animate);
}
animate();