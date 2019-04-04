function loadWebAssembly(filename, imports = {}) {
  return fetch(filename)
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => {
      imports.env = imports.env || {};
      Object.assign(imports.env, {
        __memory_base: 0,
        memory: new WebAssembly.Memory({ initial: 256, maximum: 256 })
        // __table_base: 0,
        // table: new WebAssembly.Table({
        //   initial: 4,
        //   maximum: 8,
        //   element: "anyfunc"
        // })
      });
      return new WebAssembly.Instance(module, imports);
    });
}
