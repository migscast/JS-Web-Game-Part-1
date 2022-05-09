

function newImage(Picture, fromSide, fromBase) {
    let Image = document.createElement('img')
    Image.src = Picture
    Image.style.position = 'fixed'
    Image.style.left = fromSide
    Image.style.bottom = fromBase
    document.body.append(Image)
}

function newItem(Picture, fromSide, fromBase) {
    let Item = document.createElement('img')
    Item.src = Picture
    Item.style.position = 'fixed'
    Item.style.left = fromSide
    Item.style.bottom = fromBase
    document.body.append(Item)
    Item.addEventListener('dblclick', function() {
        Item.remove()
    })
}

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')
newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')
