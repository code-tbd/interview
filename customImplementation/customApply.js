Object.defineProperty(Function.prototype, 'customApply', {
  value: function (context, args) {
    context = context ?? window
    context.fn = this
    let result
    result = context.fn(...args)
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

console.log(bar.customApply(foo, ['hh', 88]))
