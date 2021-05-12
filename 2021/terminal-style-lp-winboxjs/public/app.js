const UtilsCtrl = (() => {
	const selectors = {
		log: console.log,
		dqs: selector => document.querySelector(selector)
	}

	const getSelectors = () => selectors

	return {
		getSelectors
	}
})()

const VendorCtrl = (() => {
	const winBox = ({
		title = 'New Window',
		modal,
		background,
		width,
		height,
		top,
		right,
		bottom,
		left,
		mount,
		onfocus,
		onblur
	}) =>
		new WinBox({
			title,
			modal,
			background,
			width,
			height,
			top,
			right,
			bottom,
			left,
			mount,
			onfocus,
			onblur
		})

	return {
		winBox
	}
})()

const UICtrl = (() => {
	const { dqs } = UtilsCtrl.getSelectors()
	const { winBox } = VendorCtrl

	const clrs = {
		alpha: '#00aa00',
		beta: '#777'
	}

	const selectors = {
		aboutLink: dqs('#about-link'),
		aboutContent: dqs('#about-content'),
		contactLink: dqs('#contact-link'),
		contactContent: dqs('#contact-content')
	}

	const { aboutLink, aboutContent, contactLink, contactContent } = selectors

	const winBoxOnFocus = function () {
		this.setBackground(clrs.alpha)
	}

	const winBoxOnBlur = function () {
		this.setBackground(clrs.beta)
	}

	const getClrs = () => clrs
	const getSelectors = () => selectors

	const loadEvntListeners = () => {
		aboutLink.addEventListener('click', () => {
			winBox({
				title: 'About Me',
				// modal: true,
				width: '400px',
				height: '400px',
				top: 50,
				right: 50,
				bottom: 50,
				left: 50,
				mount: aboutContent,
				onfocus: winBoxOnFocus,
				onblur: winBoxOnBlur
			})
		})

		contactLink.addEventListener('click', () => {
			winBox({
				title: 'Contact',
				// modal: true,
				width: '400px',
				height: '400px',
				top: 150,
				right: 50,
				bottom: 50,
				left: 250,
				mount: contactContent,
				onfocus: winBoxOnFocus,
				onblur: winBoxOnBlur
			})
		})
	}

	return {
		getClrs,
		getSelectors,
		loadEvntListeners
	}
})()

const App = (UICtrl => {
	const { loadEvntListeners } = UICtrl

	const init = () => {
		loadEvntListeners()
	}

	return {
		init
	}
})(UICtrl)

App.init()
