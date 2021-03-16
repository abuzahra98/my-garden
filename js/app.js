'use stridt';
const Flower = function( image, name , season ){
  this.image = image;
  this.name = name;
  this.season = season;
  Flower.all.push( this );
};
Flower.all =[];

Flower.prototype.addflower = function(){
  localStorage.setItem( 'data' , JSON.stringify( Flower.all ) );
};
let handelsubmit = function(){
  let flower =new Flower (
    document.getElementById( 'imgae' ).value,
    document.getElementById( 'name' ).value,
    document.getElementById( 'season' ).value );
  flower.addflower();
  rendar();
};
function rendar(){
  document.getElementById( 'datatable' ).innerHTML = '';
  if( localStorage.data ) {
    for ( let index = 0; index < JSON.parse( localStorage.getItem('data') ).length; index++ ) {
      let trtag = document.createElement( 'tr' );
      document.getElementById( 'datatable' ).appendChild( trtag );

      let tdtag = document.createElement( 'td' );
      trtag.appendChild( tdtag );
      tdtag.innerHTML = `<span class='delete'id = '${index}'>X<span> `;


      let tdtag1 = document.createElement( 'td' );
      trtag.appendChild( tdtag1 );
      tdtag1.textContent = Flower.all[index].image;

      let tdtag2 = document.createElement( 'td' );
      trtag.appendChild( tdtag2 );
      tdtag2.textContent = Flower.all[index].name;

      let tdtag3 = document.createElement( 'td' );
      trtag.appendChild( tdtag3 );
      tdtag3.textContent = Flower.all[index].season;

    }
  }
}

function getdatafromlocalstorig(){
  if( localStorage.data ){
    for ( let index = 0; index < JSON.parse( localStorage.data ) .length; index++ ) {
      Flower.all.push( JSON.parse( localStorage.data )[index] );
    }
  }
}
let form = document.getElementById( 'form' );
form.addEventListener( 'submit' , handelsubmit );
getdatafromlocalstorig();
rendar();


function clearalldata( event){
  Flower.all = [];
  localStorage.setItem( 'data',JSON.stringify( Flower.all ) );
  rendar();
}

let clear = document.getElementById( 'clear' );
clear.addEventListener( 'click', clearalldata );

function deleteone( event ){

  if( event.target.matches( '.delete' ) )
  {
     
    Flower.all.splice ( event.target.id,1 );
    localStorage.setItem( 'data',JSON.stringify( Flower.all ) );
    rendar();
  }
}
let deletee = document.getElementById( 'datatable' );
deletee.addEventListener( 'click',deleteone );

