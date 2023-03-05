export function measure(target: any, name: string, descriptor: any) {
  const oldValue = descriptor.value
  descriptor.value = async function() {
    console.time(name)
    const ret = await oldValue.apply(this)
    console.timeEnd(name)
    return ret
  }
  return descriptor
}