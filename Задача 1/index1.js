function func(n, callback) {
  console.log(n);
  if (callback) {
    setTimeout(callback, 1000, n + 1);
  }
}
func(1, (n) => {
  func(n, (n) => {
    func(n, (n) => {
      func(n, (n) => {
        func(n, (n) => {
          func(n, (n) => {
            func(n, (n) => {
              func(n, (n) => {
                func(n, (n) => {
                  func(n);
                });
              });
            });
          });
        });
      });
    });
  });
});
