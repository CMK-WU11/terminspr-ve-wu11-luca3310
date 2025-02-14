export default async function loadTest(delay: number) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay * 1000);
    });
}
