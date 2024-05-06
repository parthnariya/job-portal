export function throttle(
  timer: number | undefined,
  func: () => void,
  delay?: number
) {
  if (timer) {
    return;
  }

  timer = window.setTimeout(function () {
    func();

    timer = undefined;
  }, delay);
}
