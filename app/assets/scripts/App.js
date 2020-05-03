import '../styles/styles.css' //loading css file in the main javascript file, webpack only works with javascript so must install

if (module.hot) {
	module.hot.accept()
}