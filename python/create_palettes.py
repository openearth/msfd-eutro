import numpy as np

colors = ['#33cc33', '#ffff00', '#ff9900', '#990000']
colors = ['51 204 51', '255 255 0', '255 153 0', '153 0 0']

steps = 5

rows = np.arange(0, 100 + steps, steps)

names = []
firsts = rows.copy()
for first in rows:
    seconds = firsts[firsts > first]
    for second in seconds:
        thirds = seconds[seconds > second]
        for third in thirds:
            names.append([first, second, third])

for name in names:
    filename ='-'.join(map(str, name))
    f = open('./palettes/custom-{name}.pal'.format(name=filename), "w")
    i = 0
    for row in rows:
        f.write(colors[i])
        f.write('\n')
        if (i < len(name)):
          if (row >= name[i]):
              i += 1
    f.close()
