const solution = (numbers) => {

    const mtr = numbers.map((v) => String(v)).sort((a, b) => (
          Number(b + a) - Number(a + b)
    ))
  
    return Object.is(mtr.findIndex(e => e === '0'),0) ? '0' : mtr.join('')
  }