// Converts RGB values to Hexadecimal. Takes an array ['r', 'g', 'b']

export const makeHex = (colors) => {
  let hex = '#'

  colors.forEach(color => {
    let channelHex = Number.parseInt(color).toString(16)
    if (channelHex.length === 1) channelHex = ('0' + channelHex)
    hex = (hex + channelHex).toUpperCase()
  });

  return hex
}