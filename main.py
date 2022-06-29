def on_on_chat(x=10, y=0, z=0):
    h=0
    p = positions.add(player.position(), pos(x, y, z))
    while True:
        for i in range (16):
            blocks.place(blocks.block_with_data(159, i), positions.add(p, pos(i, h, 0)))
        for i in range (16):
            blocks.place(blocks.block_with_data(159, i), positions.add(p, pos(0, h, i)))
        for i in range (16):
            blocks.place(blocks.block_with_data(159, i), positions.add(p, pos(i, h, 16)))
        for i in range (16):
            blocks.place(blocks.block_with_data(159, i), positions.add(p, pos(16, h, i)))
        h+=1
player.on_chat("b", on_on_chat)