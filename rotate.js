AFRAME.registerComponent('rotate',{
    schema: {
        speed: {type:'number',default:1}
    },
    tick: function() {
        var rotation = this.el.getAttribute('rotation');
        rotation.y+=this.data.speed;
        this.el.setAttribute('rotation',{
            x: rotation.x,
            y: rotation.y,
            z: rotation.z
        });
    }
});

AFRAME.registerComponent('rotate_event',{
    schema: {
        listener: {}
    },
    init: function() {
        this.data.listener = window.addEventListener("click",e=>{
            var rot = this.el.getAttribute('rotation');
            rot.y += 20;
            rot.y = rot.y % 360;
            this.el.setAttribute('rotation',{x:rot.x,y:rot.y,z:rot.z});
        });
    }
});