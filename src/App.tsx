import { useState, useLayoutEffect, useEffect, useRef, forwardRef  } from 'react'
import './App.css'
import HTMLFlipBook from 'react-pageflip'

const cutoffYear = 1990;

const Page = forwardRef((props, ref) => {
	return (
		<div className="page" ref={ref}>
			<div className="page-content">{props.children}</div>
			<div className="page-footer">Page number: {props.number}</div>
		</div>
	);
});

const IndexPage = forwardRef((props, ref) => {
	return (
		<div className="page" ref={ref}>
		This will be the index page.
		</div>
	);
});

const CoverPage = forwardRef((props, ref) => {
	return (
		<div className="cover-page" ref={ref}>
			<div>{props.children}</div>
		</div>
	);
});

function App() {
	const [usePortrait, setUsePortrait] = useState(window.innerWidth < window.innerHeight);
	const [bookSize, setBookSize] = useState(function() { 
		const newState = window.innerWidth < window.innerHeight;
		if (newState) {
			return window.innerWidth*1.66*.9;
		} else {
			return window.innerHeight*.9;
		}	
	});
	const flipBookRef = useRef(null);
	useEffect(() => {
		const handleResize = () => {
			newState = window.innerWidth < window.innerHeight;
			setUsePortrait(newState);
			if (newState) {
				setBookSize(window.innerWidth*1.66*.9);
			} else {
				setBookSize(window.innerHeight*.9);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize',handleResize);
		};
	}, []);
	useEffect(() => {
		const timer = setTimeout(() => {
			if(flipBookRef.current) {
				if (flipBookRef.current.pageFlip().getCurrentPageIndex() == 0) {
					flipBookRef.current.pageFlip().flipNext();
				}
				//Perhaps have a pop up here, otherwise auto flip to next page:
			}
		}, 3000);
		return () => clearTimeout(timer);
	}, []);
	return (
		<HTMLFlipBook
		ref={flipBookRef}
		width={bookSize*.6}
		height={bookSize}
		showCover={true}
		usePortrait={usePortrait}
		startZIndex={0}
		drawShadow={true}>
			<CoverPage>Title</CoverPage>
			<IndexPage></IndexPage>
			<Page number="1">
				<h1>Title</h1>
				<div>
				<p>Example Text</p>
				</div>
			</Page>
			<Page number="2">Page text</Page>
			<Page number="3">Page text</Page>
			<Page number="4">Page text</Page>
			<Page number="5">Page text</Page>
			<CoverPage>End</CoverPage>
		</HTMLFlipBook>
	);
}

export default App
