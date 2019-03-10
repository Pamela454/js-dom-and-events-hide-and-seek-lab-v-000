function getFirstSelector( pass ) {
  return document.querySelector( pass )
}

function nestedTarget() {
  return document.getElementById('app').querySelector( '#nested .target' )
}

function deepestChild() {
  
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll( '.ranked-list' )
  parseInt(ranks)
  for (const i of ranks) {
  console.log(i + n);
  }
}