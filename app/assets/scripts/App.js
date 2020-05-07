import '../styles/styles.css' //loading css file in the main javascript file, webpack only works with javascript so must install css-loader style-loader

if (module.hot) {  //accept updates on the fly
	module.hot.accept() //accept the hot updates if it makes sense to accept them, When this module or dependencies are updated, this module can be disposed and re-evaluated without informing parents. This makes sense if this module has no exports (or exports are updated in another way). 
}