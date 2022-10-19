export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function thumbnail(url: string, width: number, height: number) {
  return url.replace('{width}', `${width}`).replace('{height}', `${height}`);
}
