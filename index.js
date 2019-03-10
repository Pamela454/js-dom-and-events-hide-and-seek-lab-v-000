function getFirstSelector( pass ) {
  return document.querySelector( pass )
}

function nestedTarget() {
  return document.getElementById('app').querySelector( '#nested .target' )
}

function deepestChild() {
  const nodes = document.querySelector( '#grand-node div div div div' )
  return nodes
}

function increaseRankBy(n) {
  const ranks = document.querySelector( '.ranked-list' )
  parseInt(ranks)
}