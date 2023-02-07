type Mods = Record<string, boolean | string>
export function classNames(cls: string, mds: Mods = {}, additional: string[] = []): string {
return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mds)
        .filter(([className, value]) => Boolean(value))
        .map(([className, value]) => className)
].join(' ');
}