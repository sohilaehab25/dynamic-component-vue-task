/* __placeholder__ */
export default (await import('vue')).defineComponent({
activated() {
alert(" home activated");

},
deactivated() {
alert('home deactivated');
}
});
