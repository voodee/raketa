
  // const tag = $('video')
  // const play = () => video.play();
  // tag.on("mount", () => window.addEventListener("load", play));
  // tag.on("unmount", () => window.removeEventListener("load", play));

$( window ).load( () => {
  $( 'video' ).each( (i, el) => {

    $(el).get(0).play()

  })
})

// import './lib/jquery.isotope.perfectmasonry'
import './lib/jquery.hoverdir'

$(document).ready( () => {

  $('.item').each( (i, el) => { 
    $(el).hoverdir()
  })
  
})  