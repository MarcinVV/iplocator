export function showNotyfication(setter) {
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000);
}
