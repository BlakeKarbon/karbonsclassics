import { useState, useLayoutEffect, forwardRef  } from 'react'
import './App.css'
import HTMLFlipBook from 'react-pageflip'

const cutoffYear = 1990;

const Page = forwardRef((props, ref) => {
	return (
		<div className="demoPage" ref={ref}>
			<h1>Page Header</h1>
			<p>{props.children}</p>
			<p>Page number: {props.number}</p>
		</div>
	);
});


function App() {
	const [usePortrait, setUsePortrait] = useState(window.innerWidth < window.innerHeight);
	return (
		<HTMLFlipBook
		width={window.innerHeight*.9*.6}
		height={window.innerHeight*.9}
		showCover={true}
		usePortrait={usePortrait}
		startZIndex={0}
		drawShadow={true}>
			<Page number="1">Page text</Page>
			<Page number="2">Page text</Page>
			<Page number="3">Page text</Page>
			<Page number="4">Page text</Page>
			<Page number="5">Page text</Page>
			<Page number="6">Page text</Page>
			<Page number="7">Page text</Page>
		</HTMLFlipBook>
	);
}

export default App
