Object.defineProperty(Function.prototype, 'customCall', {
  value: function (context) {
    context = context ?? window
    const args = []
    for (let i = 1; i < arguments.length; i++) {
      args.push(arguments[i])
    }
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
  }
})

// **** test ****

const foo = {
  value: 1
}

function bar(name, age) {
  console.log('name', name)
  console.log('age', age)
  console.log(this.value)
  return { me: 'tbd' }
}

console.log(bar.customCall(foo, 'hh', 88))
