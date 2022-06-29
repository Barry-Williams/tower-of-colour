player.onChat("b", function on_on_chat(x: number = 10, y: number = 0, z: number = 0) {
    let i: number;
    let h = 0
    let p = positions.add(player.position(), pos(x, y, z))
    while (true) {
        for (i = 0; i < 16; i++) {
            blocks.place(blocks.blockWithData(159, i), positions.add(p, pos(i, h, 0)))
        }
        for (i = 0; i < 16; i++) {
            blocks.place(blocks.blockWithData(159, i), positions.add(p, pos(0, h, i)))
        }
        for (i = 0; i < 16; i++) {
            blocks.place(blocks.blockWithData(159, i), positions.add(p, pos(i, h, 16)))
        }
        for (i = 0; i < 16; i++) {
            blocks.place(blocks.blockWithData(159, i), positions.add(p, pos(16, h, i)))
        }
        h += 1
    }
})
