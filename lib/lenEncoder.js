const { checkStr, checkNums, checkTokens } = require('./general')
const { encode, decode } = require('./encoder')
const { maxEncode, maxDecode } = require('./maxEncoder')

// Find the string having the longest total
// length (len * occurrence) among the array.
function longestLen(strs, defaultStr) {
  const lens = {}
  let mode = defaultStr
  let max = 0
  strs.forEach(e => {
    if (!lens[e] && lens[e] != 0) lens[e] = 0
    else {
      lens[e] += e.length
      if (lens[e] > max)
        max = lens[mode = e]
      else if (lens[e] == max && e == defaultStr)
        mode = e
    }
  })
  return mode
}

function lenEncode(nums, cfg) {
  if (!checkNums(nums)) return ''

  let strs = nums.map(e => encode(e, cfg))
  const skip = longestLen(strs, cfg.table[0])
  strs = strs.map(e => e == skip ? '' : e)

  const lens = strs.map(e => e.length)
  let prefix = maxEncode(lens, cfg) + cfg.dlmtLen
  skip == cfg.table[0] || (prefix += skip + cfg.dlmtLen)

  return prefix + strs.join('')
}

function lenDecode(str, cfg, type) {
  if (!checkStr(str)) return []

  const tokens = str.split(cfg.dlmtLen)
  if (!checkTokens(tokens, 3, 2)) return []

  const lens = maxDecode(tokens[0], cfg, 'number')
  let skip = tokens[2] ? tokens[1] : cfg.table[0]
  str = tokens[2] || tokens[1]
  skip = decode(skip, cfg, type)

  const totalLen = lens.reduce((a, e) => a + e)
  if (totalLen != str.length) return []

  let i = 0
  return lens.map(e => e ? decode(str.slice(i, i += e), cfg, type) : skip)
}

module.exports = {
  lenEncode,
  lenDecode,
}