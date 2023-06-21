export const data = JSON.parse("{\"key\":\"v-094bd46a\",\"path\":\"/01.WEB/ES6/Symbol.html\",\"title\":\"Symbol\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Symbol\",\"date\":\"2023-05-09T13:49:16.000Z\",\"categories\":[\"JavaScript\"],\"tags\":[\"JavaScript\"],\"author\":{\"name\":\"zhang\"}},\"headers\":[{\"level\":2,\"title\":\"一、概述\",\"slug\":\"一、概述\",\"link\":\"#一、概述\",\"children\":[]},{\"level\":2,\"title\":\"二、特性\",\"slug\":\"二、特性\",\"link\":\"#二、特性\",\"children\":[{\"level\":3,\"title\":\"1. Symbol 值通过 Symbol 函数生成，使用 typeof，结果为 \\\"symbol\\\"\",\"slug\":\"_1-symbol-值通过-symbol-函数生成-使用-typeof-结果为-symbol\",\"link\":\"#_1-symbol-值通过-symbol-函数生成-使用-typeof-结果为-symbol\",\"children\":[]},{\"level\":3,\"title\":\"2. Symbol 函数前不能使用 new 命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。\",\"slug\":\"_2-symbol-函数前不能使用-new-命令-否则会报错。这是因为生成的-symbol-是一个原始类型的值-不是对象。\",\"link\":\"#_2-symbol-函数前不能使用-new-命令-否则会报错。这是因为生成的-symbol-是一个原始类型的值-不是对象。\",\"children\":[]},{\"level\":3,\"title\":\"3. instanceof 的结果为 false\",\"slug\":\"_3-instanceof-的结果为-false\",\"link\":\"#_3-instanceof-的结果为-false\",\"children\":[]},{\"level\":3,\"title\":\"4. Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。\",\"slug\":\"_4-symbol-函数可以接受一个字符串作为参数-表示对-symbol-实例的描述-主要是为了在控制台显示-或者转为字符串时-比较容易区分。\",\"link\":\"#_4-symbol-函数可以接受一个字符串作为参数-表示对-symbol-实例的描述-主要是为了在控制台显示-或者转为字符串时-比较容易区分。\",\"children\":[]},{\"level\":3,\"title\":\"5. 如果 Symbol 的参数是一个对象，就会调用该对象的 toString 方法，将其转为字符串，然后才生成一个 Symbol 值。\",\"slug\":\"_5-如果-symbol-的参数是一个对象-就会调用该对象的-tostring-方法-将其转为字符串-然后才生成一个-symbol-值。\",\"link\":\"#_5-如果-symbol-的参数是一个对象-就会调用该对象的-tostring-方法-将其转为字符串-然后才生成一个-symbol-值。\",\"children\":[]},{\"level\":3,\"title\":\"6. Symbol 函数的参数只是表示对当前 Symbol 值的描述，相同参数的 Symbol 函数的返回值是不相等的。\",\"slug\":\"_6-symbol-函数的参数只是表示对当前-symbol-值的描述-相同参数的-symbol-函数的返回值是不相等的。\",\"link\":\"#_6-symbol-函数的参数只是表示对当前-symbol-值的描述-相同参数的-symbol-函数的返回值是不相等的。\",\"children\":[]},{\"level\":3,\"title\":\"7. Symbol 值不能与其他类型的值进行运算，会报错。\",\"slug\":\"_7-symbol-值不能与其他类型的值进行运算-会报错。\",\"link\":\"#_7-symbol-值不能与其他类型的值进行运算-会报错。\",\"children\":[]},{\"level\":3,\"title\":\"8. Symbol 值可以显式转为字符串。\",\"slug\":\"_8-symbol-值可以显式转为字符串。\",\"link\":\"#_8-symbol-值可以显式转为字符串。\",\"children\":[]},{\"level\":3,\"title\":\"9. Symbol 值可以作为标识符，用于对象的属性名，可以保证不会出现同名的属性。\",\"slug\":\"_9-symbol-值可以作为标识符-用于对象的属性名-可以保证不会出现同名的属性。\",\"link\":\"#_9-symbol-值可以作为标识符-用于对象的属性名-可以保证不会出现同名的属性。\",\"children\":[]},{\"level\":3,\"title\":\"10. Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回。但是，它也不是私有属性，有一个 Object.getOwnPropertySymbols 方法，可以获取指定对象的所有 Symbol 属性名。\",\"slug\":\"_10-symbol-作为属性名-该属性不会出现在-for-in、for-of-循环中-也不会被-object-keys-、object-getownpropertynames-、json-stringify-返回。但是-它也不是私有属性-有一个-object-getownpropertysymbols-方法-可以获取指定对象的所有-symbol-属性名。\",\"link\":\"#_10-symbol-作为属性名-该属性不会出现在-for-in、for-of-循环中-也不会被-object-keys-、object-getownpropertynames-、json-stringify-返回。但是-它也不是私有属性-有一个-object-getownpropertysymbols-方法-可以获取指定对象的所有-symbol-属性名。\",\"children\":[]},{\"level\":3,\"title\":\"11. 如果我们希望使用同一个 Symbol 值，可以使用 Symbol.for。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。\",\"slug\":\"_11-如果我们希望使用同一个-symbol-值-可以使用-symbol-for。它接受一个字符串作为参数-然后搜索有没有以该参数作为名称的-symbol-值。如果有-就返回这个-symbol-值-否则就新建并返回一个以该字符串为名称的-symbol-值。\",\"link\":\"#_11-如果我们希望使用同一个-symbol-值-可以使用-symbol-for。它接受一个字符串作为参数-然后搜索有没有以该参数作为名称的-symbol-值。如果有-就返回这个-symbol-值-否则就新建并返回一个以该字符串为名称的-symbol-值。\",\"children\":[]},{\"level\":3,\"title\":\"12. Symbol.keyFor 方法返回一个已登记的 Symbol 类型值的 key。\",\"slug\":\"_12-symbol-keyfor-方法返回一个已登记的-symbol-类型值的-key。\",\"link\":\"#_12-symbol-keyfor-方法返回一个已登记的-symbol-类型值的-key。\",\"children\":[]}]},{\"level\":2,\"title\":\"三、总结\",\"slug\":\"三、总结\",\"link\":\"#三、总结\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"01.WEB/ES6/Symbol.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
