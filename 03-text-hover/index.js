const h1 = document.querySelector( 'h1' )

h1.addEventListener( 'mousemove', e => {
  const { offsetX, offsetY } = e
  h1.style.setProperty( '--x', `${ offsetX }px` )
  h1.style.setProperty( '--y', `${ offsetY }px` )
  h1.style.setProperty( '--deg', `${ offsetX / h1.clientWidth * 360 }deg` )
  h1.classList.add( 'text' )
} )

h1.addEventListener( 'mouseleave', e => {
  h1.classList.remove( 'text' )
} )
